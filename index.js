const { CommandoClient } = require('discord.js-commando')
const path = require("path")
const fs = require('fs')
const config = require('./config.js')
const Database = require('st.db')
const db = new Database({ path: './database/database.json' })

const client = new CommandoClient({
    commandPrefix: "!",
    unknownCommandResponse: false,
    owner: "835317840911269898",
    disableEveryone: true
})

client.db = db

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['bot', 'Bot'],
        ['info', 'Info']
    ])
    .registerDefaultGroups()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logado como ' + client.user.tag)
});

client.login(config.token)