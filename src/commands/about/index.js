import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { useAppStore } from '../../store/app'

export const command = new SlashCommandBuilder()
    .setName("about")
    .setDescription("機器人資訊")
export const action = async (ctx) => {
    const appStore = useAppStore()
    var devlist = ''
    for (const i of appStore.devlist) {
        devlist += '\n'
        devlist += i
    }
    var embed = new EmbedBuilder()
        .setTitle("資訊:")
        .setColor('#00ffff')
        .setDescription(`版本: stable v${appStore.ver}
        擁有者: ${process.env.OWNER}
        開發成員名單: ${devlist}`)
    if (appStore.err) {
        embed.setDescription(`版本: -maintenance- v${appStore.ver}`)
    }
    ctx.reply({ embeds: [embed]})
}