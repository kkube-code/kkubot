import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { joinVoiceChannel } from '@discordjs/voice'
import { useAppStore } from '../../store/app';


export const command = new SlashCommandBuilder()
    .setName("getvcid")
    .setDescription("取得語音頻道ID")

export const action = async (ctx) => {
    const appStore = useAppStore()
    console.log(ctx.member.voice.channelId)
    const Embed = new EmbedBuilder()
        .setTitle('結果')
        .setColor('#00ffff')
        .setDescription(`加入的語音頻道:${ctx.member.voice.channel.name}
        ID: ${ctx.member.voice.channel.id}`)

    

    ctx.reply({ embeds: [Embed] , ephemeral: true});
};