import {Client, Events, GatewayIntentBits} from "discord.js";
import dotenv from "dotenv";
import vueinit from '@/core/vue'
import {loadCommands, loadEvents} from '@/core/loader.js'
import { useAppStore } from "./store/app";


    vueinit();
    dotenv.config();
    loadCommands();
    
    const client = new Client({intents:[GatewayIntentBits.Guilds]});
    const appStore = useAppStore();
    appStore.client = client;
    
    loadEvents();
    
    client.login(process.env.TOKEN);
