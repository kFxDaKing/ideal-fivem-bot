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

    // custom server
  if(message.content === `${prefix}mystic`) {
    let srv = new FiveM.Server('45.95.115.8:30120') // Set the IP with port.
    message.channel.send("Mystic's stats:")
    srv.getPlayers().then(data => message.channel.send(data + " players")) // Get & log the data!
    srv.getGamename().then(data => message.channel.send("Gamename: " + data))
    srv.getServer().then(data => message.channel.send("Server it is being hosted on: " + data))
  }


  // custom server
  if(message.content === `${prefix}ggez`) {
    let srv = new FiveM.Server('51.195.44.180:30120')
    message.channel.send("GGEZ's stats:")
    srv.getPlayers().then(data => message.channel.send(data + " players"))
    srv.getGamename().then(data => message.channel.send("Gamename: " + data))
    srv.getServer().then(data => message.channel.send("Server it is being hosted on: " + data))
  }


  // custom server
    if(message.content === `${prefix}zentrix`) {
    let srv = new FiveM.Server('93.158.236.38:30120')
    message.channel.send("Zentrix's stats:")
    srv.getPlayers().then(data => message.channel.send(data + " players"))
    srv.getGamename().then(data => message.channel.send("Gamename: " + data))
    srv.getServer().then(data => message.channel.send("Server it is being hosted on: " + data))
  }

  // search stats by ip:port
  if(message.content.startsWith(`${prefix}stats`)) {
    let args = message.content.slice(8).trim().split(/ +/g)
    let srv = new FiveM.Server(`${args}`)

        message.reply("these are the stats of the server you requested:")

        srv.getPlayers().then(data => message.channel.send(data + " players"))
        srv.getGamename().then(data => message.channel.send("Gamename: " + data))
        srv.getServer().then(data => message.channel.send("Server it is being hosted on: " + data))
      }

      // status/ping command, need to add some more stuff to it since it is kinda dumb
    if(message.content === `${prefix}status`) {
      let pingMessage = await message.channel.send("Ping?!?!??!?")
      let pingMessage2 = await pingMessage.edit("pong, lmfao.")
      pingMessage2.edit(`The bot latency is ${pingMessage.createdTimestamp - message.createdTimestamp}ms. Discord's API Latency is ${Math.round(client.ws.ping)}ms.`)
    }


    // help command !!MAKE IT LOOK COOL!!
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

    if(message.content.startsWith(`${prefix}announcement`)) {
      if(message.author.id === `704369709809664060`) {
        const webhookThing = new Discord.WebhookClient('763317008489906186', process.env.DISCORD_WEBHOOK_TOKEN)
        let args = message.content.slice(8).trim().split(/ +/g)
        let webhookMessage = args.join(" ");

        webhookThing.send(webhookMessage)
      }else{
      if(message.author.id != `704369709809664060`) {
        message.reply(`you are not allowed to use this command!`)
        }
      }
    }
    })

// for discord bot lists
// does this work? i really do not know
const dbots = require("dbots")
const poster = new dbots.Poster({
  client,
  apiKeys: {
    discordbotsgg: process.env.DISCORD_BOTS_GG,
    topgg: process.env.TOP_GG
  },
  clientLibrary: 'discord.js'
});

poster.startInterval();


// nice try stealing this
client.login(process.env.BOT_TOKEN)
