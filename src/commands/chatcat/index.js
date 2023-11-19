import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import { useAppStore } from '../../store/app';

export const command = new SlashCommandBuilder()
    .setName("chatcat")
    .setDescription("這是和小喵喵合作的功能")
export const action = async (ctx) => {
    // const appStore = useAppStore()
    // const list = appStore.client.guilds.cache.get(ctx.member.guildId);
    // list.members.fetch().then(m => {
    //     let members = m.map(u => u.user.username)
    //     console.log(members) //array of all members
    //     //you can also use "m.each(u => console.log(u.user.username))" to log each one individually
    //   })
    ctx.reply({ content: "開發中 無法使用", ephemeral: true })
    //await ctx.channel.send(`<@1144161789832069141>`)
}