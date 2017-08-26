/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    if (message.content === '+help') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: Liste des commandes :tools: \n\nADMINISTRATIVE \n\n**+ban**: ban un ***membre*** du serveur\n\n**+kick**: expulser un ***membre*** du serveur\n\n**Les commandes sont en dévelopement...**',
        footer: {
          text: 'Message par TesteBot.'
        }
      }}).catch(console.error)
    }
  })
}
