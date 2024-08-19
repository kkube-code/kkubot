import { Events } from "discord.js";
import { useAppStore } from "../../store/app";
import fs from 'fs'

export const event = {
    name: Events.MessageCreate,
}

export const action = async (msg) => {
    fs.readFile('src/store/overguild.json', function (err, og) {
        if (err) {
            return console.error(err);
        }
	//將二進制數據轉換為字串符
        var user = og.toString();
	//將字符串轉換為 JSON 對象
        user = JSON.parse(user);
	//將傳來的資訊推送到數組對象中
        var yes = false
        for (var i = 0; i < user.overguilds.length; i++) {
            if (msg.channel == user.overguilds[i].channel) {
                yes = true
                break
            }
        }
        for (var i = 0; i < user.overguilds.length; i++) {
            if (!yes) {
                
                if(msg.content === "ww"){//當檢測到訊息為hi的時候
                    if (msg.author.bot) return
                    msg.channel.send(`<@978937687958491146>`);
                }
                if(msg.content.includes('<@1119863977242005684>')) {
                    if (useAppStore().client.user.equals(msg.author)) return
                    msg.reply(`^^ ~`);
                }

                break
            } else if (msg.channel.id == user.overguilds[i].channel) continue
            const c = msg.client.channels.cache.get(user.overguilds[i].channel)
            if (useAppStore().client.user.equals(msg.author) || msg.author.bot) return
            c.send({content:`[**${msg.guild.name}**]
**${msg.author.displayName} (${msg.author.username})** : ${msg}
** **`, allowedMentions: { parse: [] }})
        }
    })
}
