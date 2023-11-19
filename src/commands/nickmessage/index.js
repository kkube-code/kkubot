import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("nickmessage")
    .setDescription("發送匿名訊息")
    .addStringOption(option =>
        option.setName('message')
            .setDescription('在這裡打上匿名訊息')
			.setRequired(true))
export const action = async (ctx) => {
    ctx.reply({ content: "已發送匿名訊息", ephemeral: true })
    await ctx.channel.send({ content: ctx.options.getString('message'), allowedMentions: { parse: [] }})
}