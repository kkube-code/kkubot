import {Client, Events, GatewayIntentBits, IntentsBitField} from "discord.js";
import dotenv from "dotenv";
import vueinit from '@/core/vue'
import {loadCommands, loadEvents} from '@/core/loader.js'
import { useAppStore } from "./store/app";



vueinit();
dotenv.config();
const client = new Client({intents:[
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildPresences,
    ]}, {disableEveryone: true});
const appStore = useAppStore();
appStore.client = client;

const errinit = (error) => {
    client.once(Events.ClientReady, () => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question('version?\n', name => {
            if (name === '') {
                c.user.setPresence({ activities: [
                    //{ name: 'official channel', type: ActivityType.Streaming, url: 'https://www.youtube.com/watch?v=QZWgozZVZTo' },
                    { name: `stable v${process.env.VERSION}` }
                ], status: 'online' });
                console.log(`ready logged in as ${c.user.tag}`);
                console.log("client is running")
                readline.close();
    
            } else {
                client.user.setPresence({ activities: [
                    //{ name: 'official channel', type: ActivityType.Streaming, url: 'https://www.youtube.com/watch?v=QZWgozZVZTo' },
                    { name: `-maintenance- v${name}` }
                ], status: 'dnd' });
                appStore.ver = name
                console.log(`logged as unknown --maintenance`);
                console.log(`${error}\n\n\n`)
                console.log("---initializing failsafe---")
                readline.close();
            }
        });
    })

    client.login(process.env.TOKEN);
}

try{
    await loadCommands();
    if (appStore.err) {
        await errinit('! -commands or events are fail to initialize-');
    } else {
        client.login(process.env.TOKEN);
        loadEvents();
    }

    
} catch(error) {
    errinit(error);
}


    


