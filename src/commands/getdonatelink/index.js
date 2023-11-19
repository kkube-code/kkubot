import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("getdonatelink")
    .setDescription("打這個拜託")
export const action = async (ctx) => {
    ctx.reply({ content: "https://www.patreon.com/user?u=98099020" })
}