module.exports = (client, message) => {
	if (message.content.startsWith('$voyager')) {
		let commr = require(`./../commands/${message.content.substring(9, message.content.indexOf(' ', 9)).trim()}.js`);
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
