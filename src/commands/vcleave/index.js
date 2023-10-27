import { SlashCommandBuilder, EmbedBuilder} from 'discord.js'
import { getVoiceConnection, myVoiceChannel } from '@discordjs/voice'
import { useAppStore } from '../../store/app';


export const command = new SlashCommandBuilder()
    .setName("vcleave")
    .setDescription("離開語音頻道")

export const action = async (ctx) => {
    const appStore = useAppStore()
    var Embed
    if (appStore.vc) {
        const connection = appStore.connection;
        connection.destroy()
        Embed = new EmbedBuilder()
            .setTitle("離開成功")
            .setColor('#00ffff')
            .setDescription('我離開了語音頻道');
        appStore.vc = false
        appStore.connection = null
    } else {
        Embed = new EmbedBuilder()
            .setTitle("離開失敗")
            .setColor('#00ffff')
            .setDescription('我不在語音頻道裡面');
    }
    ctx.reply({ embeds: [Embed] , ephemeral: true});
};