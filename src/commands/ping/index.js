import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ping")
export const action = async (ctx) => {
    const Embed = new EmbedBuilder()
        .setTitle("this is a example embed")
        .setColor('#00ffff')
        .setDescription('pong');
    ctx.reply({ embeds: [Embed] , ephemeral: true});
};