module.exports = (client, message) => {
	if (message.content.startsWith('$voyager')) {
		try {
			const mbits = last_msg.content.substring(9).split(' ').filter(Boolean);
			mbits.og = message;
			let commr = require(`./../commands/${mbits[0].trim()}.js`);
			commr(message.channel, mbits, client);
		/*
		pads so diff cmd lengths are accepted
		$voyager!ahoy!...
		$voyager!captain!...
		options (-`option`) are processed in the command file itself
		this also means i'll have to put another function for cmd && cmd,
		but I really just care abt how does my child performs ;~;
		*/
		} catch(e) {
			message.channel.send("malformed request. check spelling or use the command 'help'");
		}
	}
};
