import { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js'
import { useAppStore } from '../../store/app';

const appStore = useAppStore()
export const command = new SlashCommandBuilder()
    .setName("music")
    .setDescription("音樂指令")
    .addStringOption(option =>
		option.setName('arg1')
			.setDescription('參數之類的')
			.setRequired(true)
			.addChoices(
				// { name: '-qpush 新增音樂至序列', value: '-qpush' },
				// { name: '-qpop 移除序列的最後一項', value: '-qpop' },
				{ name: '-qlist', description: '查看目前序列', value: '-qlist' },
			))
    .addStringOption(option =>
        option.setName('arg2')
            .setDescription('如果上一個參數要求就要'))

export const action = async (ctx) => {
    var testButton = new ButtonBuilder()
        .setStyle(ButtonStyle.Secondary)
        .setCustomId('test')
        .setLabel('A test button')

    if ( ctx.options.getString('arg1') == '-qlist' ) {
        var s = ''
        for ( const option of appStore.music_queue ) {
            s += ( option.name + '\n' )
        }

        if (s == '') s = '空空如也 ~~'

        const listEmbed = new EmbedBuilder()
            .setTitle('序列')
            .setColor('#ddaacc')
            .setDescription(s)

        ctx.reply({ embeds: [listEmbed] })
    } else if ( ctx.options.getString('arg1') == '-qpush' ) {
        appStore.music_queue.push({name: ctx.options.getString('arg2'), guild: ctx.guildId, channel: ctx.member.voice.channel.id})
    }
}