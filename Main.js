const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
  console.log('-------------------------------------')
  console.log('          [!] TEST BOT [!]')
  console.log('-------------------------------------')
  client.user.setGame('En dev...')
})

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong')
  }
})
// Partie Help
const help = require('./module/help.js')
help(client)

client.login(process.env.TOKEN)
