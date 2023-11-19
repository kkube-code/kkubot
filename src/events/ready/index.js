import { Events,ActivityType } from "discord.js";
import { useAppStore } from "../../store/app";

export const event = {
    name: Events.ClientReady,
    once: true
}

export const action = async (c) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
      
    await readline.question('version?\n', name => {
        if (name === '') {
            c.user.setPresence({ activities: [
                { name: `stable v${process.env.VERSION}`, type: ActivityType.Streaming, url: 'https://www.youtube.com/watch?v=QZWgozZVZTo' },
                //{ name: `stable v${process.env.VERSION}` }
            ], status: 'online' });
            console.log(`ready logged in as ${c.user.tag}`);
            console.log("client is running")
            readline.close();

        } else {
            
            const appStore = useAppStore()
            c.user.setPresence({ activities: [
                { name: `stable v${name}`, type: ActivityType.Streaming, url: 'https://www.youtube.com/watch?v=QZWgozZVZTo' },
                //{ name: `stable v${name}` }
            ], status: 'online' });
            appStore.ver = name
            console.log(`ready logged in as ${c.user.tag}`);
            console.log("client is running")
            readline.close();
        }
    });
}