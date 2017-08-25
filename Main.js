const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.content === 'ping') {
    message.rchannel.send('pong')
  }
})
// Partie Help
const help = require('./module/help.js')
help(client)

client.login(process.env.TOKEN)
