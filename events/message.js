module.exports = (client, message) => {
	if (message.content.startsWith('$voyage')) {
		let commr = require(`./../commands/${message.content.substring(8, message.content.indexOf(' ', 8))}.js`);
		/*
		pads so diff cmd lengths are accepted
		$voyager!ahoy!...
		$voyager!captain!...
		options (-`option`) are processed in the command file itself
		this also means i'll have to put another function for cmd && cmd,
		but I really just care abt how does my child performs ;~;
		*/
		commr(message.channel, message, client);
	}
};

