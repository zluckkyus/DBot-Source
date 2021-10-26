const { Command } = require('discord.js-commando')

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ping",
            group: "bot",
            memberName: "ping",
            description: "Mostra a latência do bot!"
        })
    }
    run(message) {
        message.channel.send('Pong! ' + this.client.ws.ping + 'ms')
        message.channel.send(`${this.client.db.get('prefix')} Valor da Database!`)
    }
}