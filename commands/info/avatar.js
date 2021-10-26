const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'info',
            memberName: 'avatar',
            description: 'Mostra o avatar!',
            args: [
                {
                    type: 'user',
                    prompt: 'Qual avatar você quer pegar?',
                    key: 'user',
                    default: msg => msg.author
                }
            ]
        })
    }
    run(message, { user }) {
        let embed = new MessageEmbed()
         .setDescription(`Avatar de ${user}`)
         .setImage(`${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)
        message.channel.send(embed)
    }
}