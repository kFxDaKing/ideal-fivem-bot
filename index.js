const Discord = require("discord.js")
const FiveM = require("fivem")
const prefix = "f!"
const client = new Discord.Client()

console.log("Status: OFFLINE")

client.on("ready", () => {
  console.log(`Status: ONLINE`);
  client.user.setActivity(`on a FiveM server.`);
});

client.on("message", async message => {
  if(message.content === `${prefix}mystic`) {
    let srv = new FiveM.Server('45.95.115.8:30120') // Set the IP with port.
    message.channel.send("Mystic's stats:")
    srv.getPlayers().then(data => message.channel.send(data + " players")) // Get & log the data!
    srv.getGamename().then(data => message.channel.send("Gamename: " + data))
  }

  if(message.content === `${prefix}ggez`) {
    let srv = new FiveM.Server('51.195.44.180:30120') // Set the IP with port.
    message.channel.send("GGEZ's stats:")
    srv.getPlayers().then(data => message.channel.send(data + " players")) // Get & log the data!
    srv.getGamename().then(data => message.channel.send("Gamename: " + data))
  }

  if(message.content.startsWith(`${prefix}stats`)) {
    let args = message.content.slice(8).trim().split(/ +/g)
    let srv = new FiveM.Server(`${args}`)

        message.reply("these are the stats of the server you requested:")

        srv.getPlayers().then(data => message.channel.send(data + " players"))
        srv.getGamename().then(data => message.channel.send("Gamename: " + data))
        srv.getServer().then(data => message.channel.send("Server it is being hosted on: " + data))
      }

    if(message.content === `${prefix}status`) {
      let pingMessage = await message.channel.send("Ping?!?!??!?")
      let pingMessage2 = await pingMessage.edit("pong, lmfao.")
      pingMessage2.edit(`The bot latency is ${pingMessage.createdTimestamp - message.createdTimestamp}ms. Discord's API Latency is ${Math.round(client.ws.ping)}ms.`)
    }

    if(message.content === `${prefix}help`) {
      let helpEmbed = new Discord.MessageEmbed()
      .setColor(`#5600ff`)
      .setTitle(`Help!`)
      .setAuthor(`${message.author.username}`)
      .addFields(
        { name: `${prefix}stats`, value: 'Usage: f!stats IP:PORT'},
        { name: `${prefix}status`, value: 'Shows bot ping.'},
      )
      .setTimestamp()

      message.channel.send(helpEmbed)
    }
    })

client.login(token)
