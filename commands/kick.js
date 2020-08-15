const { Guild } = require("discord.js");

module.exports = (channel, last_msg, client) => {
    /*
    $voyager kick (uid) [(-b | --ban) A] ["B"]
    kicks user. with -b flag, will ban the user for A time for B reason. if A<=-1, ban is permanent
    */
    var mbits = last_msg.content.substring(9).split(' ');
    let loger = [0, 0];
    try {channel.guild.fetchMember(mbits[0]);} catch(err) {channel.send('malformed request: invalid user ID');}
    /*
    0: ban
    */
    mbits.shift();
    if (mbits[1] === "-b" || mbits[1] == "--ban") {
        loger[0] = true;
        try {
            parseInt(mbits[2]);
        } catch (err) {
            channel.send('malformed request: ban needs a specified amount of days after the \'-b\' flag, or -1 for a permanent ban');
        }
        if (channel.guild.fetchMember(mbits[0]).bannable) {
            channel.guild.fetchMember(mbits[0]).ban({ days: parseInt(mbits[2]) }, 0, mbits.join(" ").substring(mbits.join(" ").indexOf("\""), mbits.join(" ").indexOf("\"", mbits.join(" ").indexOf("\"") + 1) + 1).substring(1, mbits.join(" ").substring(mbits.join(" ").indexOf("\""), mbits.join(" ").indexOf("\"", mbits.join(" ").indexOf("\"") + 1) + 1).length - 1) || "mod intervention").then(channel.send(`banned user #${mbits[0]}`));
        } else {
            channel.send('bot needs permission to ban this user. try moving the bot\'s role higher than the user\'s');
        }
    } else {
        if (channel.guild.fetchMember(mbits[0]).kickable) {
            channel.guild.fetchMember(mbits[0]).kick(mbits.join(" ").substring(mbits.join(" ").indexOf("\""), mbits.join(" ").indexOf("\"", mbits.join(" ").indexOf("\"") + 1) + 1).substring(1, mbits.join(" ").substring(mbits.join(" ").indexOf("\""), mbits.join(" ").indexOf("\"", mbits.join(" ").indexOf("\"") + 1) + 1).length - 1) || "mod intervention");
        } else {
            channel.send('bot needs permission to kick this user. try moving the bot\'s role higher than the user\'s');
        }
    }
};
