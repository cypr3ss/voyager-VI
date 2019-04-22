module.exports = (client, message) => {
	if (message.content.startsWith('!')) {
		let commr = require(`./../commands/${message.content.substring(1)}.js`);
		commr(message.channel, client);
	}
};
