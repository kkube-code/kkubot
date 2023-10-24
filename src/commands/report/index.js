import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName("report")
    .setDescription("回傳BOT錯誤至後台/工程服")
    .addStringOption(option =>
		option.setName('destination')
			.setDescription('1:後台 2:工程服')
			.setRequired(true)
			.addChoices(
				{ name: '後台', value: '1' },
				{ name: '工程服', value: '2' },
			))
    .addStringOption(option =>
        option.setName('content')
            .setDescription('在這裡告訴我出了什麼問題')
			.setRequired(true))
export const action = async (ctx) => {

    const dict = [
        '後台','工程服'
    ]
    var destination = ctx.options.getString('destination')
    destination = Number(destination)
    const showEmbed = new EmbedBuilder()
        .setTitle("回傳成功")
        .setColor('#00ffff')
        .setDescription(`已回傳至BOT${dict[destination-1]}`);

    const reportEmbed = new EmbedBuilder()
        .setTitle("回傳消息")
        .setColor('#00ffff')
        .setDescription(`日期: ${Date().toString()}
        內容: ${ctx.options.getString('content')}`);
    ctx.reply({ embeds: [showEmbed] , ephemeral: true});
    if(destination === 1){
        var dc = ctx.client.channels.cache.get(process.env.BACK_REPORT_CHANNEL)
        dc.send({ embeds: [reportEmbed]});
    }else{
        var dc = ctx.client.channels.cache.get(process.env.CODING_REPORT_CHANNEL)
        dc.send({ embeds: [reportEmbed]});
    }
};