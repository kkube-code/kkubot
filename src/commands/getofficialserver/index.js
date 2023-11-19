import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("getofficialserver")
    .setDescription("官方伺服器連結")
export const action = async (ctx) => {
    ctx.reply({ content: "https://discord.gg/QDBjURBkts" })
}