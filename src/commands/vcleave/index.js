import { SlashCommandBuilder, EmbedBuilder} from 'discord.js'
import { getVoiceConnection, myVoiceChannel } from '@discordjs/voice'
import { useAppStore } from '../../store/app';


export const command = new SlashCommandBuilder()
    .setName("vcleave")
    .setDescription("離開語音頻道")

export const action = async (ctx) => {
    const appStore = useAppStore()
    var Embed
    var vc = false
    var connection

    for (var i = 0; i < appStore.connections.length; i++) {
        var _connection = appStore.connections[i]
        if (_connection.guild == ctx.guildId) {
            vc = true
            connection = _connection.connection
            appStore.connections.splice(i, 1)
        }
    }

    if (vc) {
        connection.destroy()
        Embed = new EmbedBuilder()
            .setTitle("離開成功")
            .setColor('#00ffff')
            .setDescription('我離開了語音頻道');
    } else {
        Embed = new EmbedBuilder()
            .setTitle("離開失敗")
            .setColor('#00ffff')
            .setDescription('我不在語音頻道裡面');
    }
    ctx.reply({ embeds: [Embed] , ephemeral: true});
};