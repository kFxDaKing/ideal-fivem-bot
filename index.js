const Discord = require("discord.js")
const FiveM = require("fivem")
const prefix = "f!"
const client = new Discord.Client()

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
})

client.login("token")
