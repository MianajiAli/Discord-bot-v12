const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "",
  // args: true,
  usage: "",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
	execute: async(client, message, args) => {
    let money = db.get(`money_${message.author.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`balance`)
      .setDescription(money);
    message.channel.send(embed);
  },
};
