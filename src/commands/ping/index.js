import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ping")
export const action = async (ctx) => {
    const calculatingEmbed = new EmbedBuilder()
        .setTitle("Pong!")
        .setColor('#00ffff')
        .setDescription('正在計算延遲......');
        
    const msg =await ctx.reply({ embeds: [calculatingEmbed] , ephemeral: true, fetchReply: true });
    const ping = msg.createdTimestamp - ctx.createdTimestamp;

    
    const calculatedEmbed = new EmbedBuilder()
        .setTitle("Pong!")
        .setColor('#00ffff')
        .setDescription(`延遲：${ping} ms`);
    ctx.editReply({ embeds: [calculatedEmbed] , ephemeral: true, fetchReply: true }) 
};