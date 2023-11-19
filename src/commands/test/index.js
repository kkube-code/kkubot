import { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js'
import { useAppStore } from '../../store/app';

export const command = new SlashCommandBuilder()
    .setName("test")
    .setDescription("測試用")
export const action = async (ctx) => {
    var testButton = new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId('test')
        .setLabel('A test button')
    const testEmbed = new EmbedBuilder()
        .setTitle('Test')
        .setColor('#ddaacc')
        .setDescription('Test')

    const row = new ActionRowBuilder()
        .addComponents(testButton);

    const response = await ctx.reply({ embeds: [testEmbed], components: [row], fetchReply: true })

    const collectorFilter = i => i.user.id === ctx.user.id;

    try {
        
        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
        while (true) {
            await confirmation.update({ embeds: [testEmbed], components: [row] })
            await ctx.channel.send({content:'你點了按鈕', ephemeral: true})
        }
    } catch (e) {
        console.log(e)
        await ctx.channel.send({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
    }
}