import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { joinVoiceChannel } from '@discordjs/voice'
import { useAppStore } from '../../store/app';


export const command = new SlashCommandBuilder()
    .setName("vcjoin")
    .setDescription("加入語音頻道")

export const action = async (ctx) => {
    const appStore = useAppStore()
    var Embed
    var channel = ctx.member.voice.channel
    console.log(ctx.member.voice.channel)
    if (ctx.member.voice.channel === null) {
        Embed = new EmbedBuilder()
            .setTitle('加入失敗')
            .setColor('#00ffff')
            .setDescription('你必須先加入一個語音頻道')
    } else {
        if (appStore.vc) {
            Embed = new EmbedBuilder()
                .setTitle('加入失敗')
                .setColor('#00ffff')
                .setDescription('我必須先退出語音頻道')
            
        } else {
            
        //try {
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: ctx.guildId,
                adapterCreator: ctx.guild.voiceAdapterCreator,
            });
            appStore.connection = connection
            appStore.vc = true
            Embed = new EmbedBuilder()
                .setTitle('加入成功')
                .setColor('#00ffff')
                .setDescription(`加入的語音頻道:${channel.name}`)

            
        //} catch (error) {
        //    const connection = getVoiceConnection(myVoiceChannel.guild.id);
        //    connection.destroy()
        //}
        }
    }

    

    ctx.reply({ embeds: [Embed] , ephemeral: true});
};