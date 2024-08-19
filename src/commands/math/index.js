import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("math")
    .setDescription("算數")
    .addStringOption(option =>
		option.setName('arg')
			.setDescription('算甚麼東西')
			.setRequired(true)
			.addChoices(
				{ name: '-addww', description: '加法', value: '-add' },
			))
export const action = async (ctx) => {
const result = 'Maintanance'
    ctx.editReply({ content: " 計算結果:"+result , ephemeral: true, fetchReply: true }) 
};