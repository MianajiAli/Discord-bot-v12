const Discord = require("discord.js");
const config = require("../../config.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: "balance",
  aliases: ["bal","mbal"],
  description: "balance",
  // args: true,
  usage: "",
  guildOnly: true,
  // ownerOnly: true,
  cooldown: 3,
  execute: async (client, message, args) => {
    var user = message.author.id;
    if (!(user.length == 18)) return message.channel.send("invalid user");
    const money = db.table("moneydb");
    let balance = await money.get(user);

    const embed = new Discord.MessageEmbed()
      .setColor(config.color.main)
      .setTitle(`balance`)
      .addFields(
        {
          name: `${config.emojis.arrow} user:`,
          value: `<@${user}>`,
          inline: true,
        },
        { name: "\u200B", value: "\u200B", inline: true },
        {
          name: `${config.emojis.arrow} id:`,
          value: `\`${user}\``,
          inline: true,
        },
        {
          name: `${config.emojis.coin} balance:`,
          value: `\`${balance}\``,
          inline: true,
        }
      )
      .setTimestamp();
    message.channel.send(embed);
  },
};
