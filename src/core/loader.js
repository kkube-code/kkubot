import {Collection, REST, Routes} from 'discord.js';
import fg from 'fast-glob';
import { useAppStore } from '../store/app';

const updateSlashCommands = async(commands) => {

    // axios({
    //     method: 'POST',
    //     url: 'https://discord.com/api/v10/applications/{application.id}/guilds/{guils.id}/commands',
    //     headers: {
    //         Authorization: 'Bot {botToken}'
    //     },
    //     data: {
    //         body:[
    //             {name: 'ping', description: 'ping'},
    //         ]
    //     }
    // })

    const rest = new REST({versions:10}).setToken(process.env.TOKEN);
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APP_ID,
            process.env.SERVER_ID
        ),
        {
            body: commands
        },
    );
    console.log(result);
};

export const loadCommands = async() => {
    const appStore = useAppStore();
    const commands = [];
    const actions = new Collection;
    const files = await fg('./src/commands/**/index.js');

    for(const file of files) {
        const cmd = await import(file);
        commands.push(cmd.command);
        actions.set(cmd.command.name, cmd.action);
    };
    await updateSlashCommands(commands);
    appStore.commandsActionMap = actions;

    console.log(actions);
};

export const loadEvents = async() => {
    const files = await fg('./src/events/**/index.js');
    const appStore = useAppStore()
    const client = appStore.client;
    for(const file of files) {
        const eventf = await import(file);
        if(eventf.event.once){
            client.once(
                eventf.event.name,
                eventf.action
            );
        } else {
            client.on(
                eventf.event.name,
                eventf.action
            );
        }
        
    };
}
