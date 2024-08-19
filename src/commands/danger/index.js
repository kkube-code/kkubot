import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { useAppStore } from '../../store/app'

export const command = new SlashCommandBuilder()
    .setName("danger")
    .setDescription("危")
export const action = async (ctx) => {
    var embed = new EmbedBuilder()
        .setColor('#000000')
        .setImage('http://kkubemc.000webhostapp.com/pic/danger.gif')
    ctx.reply({ embeds: [embed]})
}