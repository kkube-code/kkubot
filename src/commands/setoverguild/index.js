import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType } from 'discord.js'
import fs from 'fs'

export const command = new SlashCommandBuilder()
    .setName("setoverguild")
    .setDescription("設定跨群聊天")
    .addChannelOption(option => option
        .setName('channel')
        .setDescription('選擇要使用overguild的頻道')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const action = async (ctx) => {
    const Embed = new EmbedBuilder()
        .setTitle("設置完成")
        .setColor('#ddaacc')
        .setDescription(`${ctx.options.getChannel('channel')} 已設為overguild頻道`);
    var newOverguild = JSON.parse(`{
        "id": "${ctx.guildId}", "channel": "${ctx.options.getChannel('channel').id}"
    }`)
    await runJSON(newOverguild, ctx.guildId)
    ctx.reply({ embeds: [Embed] })
};



const runJSON = async(newOverguild, id) => {
    //先將原本的 json 檔讀出來
    fs.readFile('src/store/overguild.json', function (err, og) {
        if (err) {
            return console.error(err);
        }
	//將二進制數據轉換為字串符
        var user = og.toString();
	//將字符串轉換成JSON對象
        user = JSON.parse(user);
        for (var i = 0; i < user.overguilds.length; i++) {
            console.log(user.overguilds[i], user.overguilds[i].id, String(id) == user.overguilds[i].id)
            if (String(id) == user.overguilds[i].id) {
                user.overguilds.splice(i, 1);
            }
        }
        var str = JSON.stringify(user);
        console.log("\n\n\n", str)
        fs.writeFile('src/store/overguild.json', str, function (err) {
            console.log(str)
            if (err) {
                console.error(err);
            }
            console.log('delete user in userInfo...')
            writeJSON(newOverguild)
        })
    })
}

const writeJSON = async(newOverguild) => {
    fs.readFile('src/store/overguild.json', function (err, og) {
        if (err) {
            return console.error(err);
        }
	//將二進制數據轉換為字串符
        var user = og.toString();
	//將字符串轉換為 JSON 對象
        user = JSON.parse(user);
    //將傳來的資訊推送到數組對象中
        user.overguilds.push(newOverguild);
        
    //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
        var str = JSON.stringify(user);
	//將字串符傳入您的 json 文件中
        fs.writeFile('src/store/overguild.json', str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log('Add new user to userInfo...')
        })
    })
}