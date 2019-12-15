module.exports = (client, message) => {
	if (message.content.startsWith('$voyage')) {
		let commr = require(`./../commands/${message.content.substring(8)}.js`);
		commr(message.channel, message, client);
	}
};
