module.exports = (channel, last_msg, client) => {
	mbits = last_msg.content.substring(8).split(' ');
	mbits.shift(); /* i need to remove 'timemsg' so I'm only left with the opts */
	/*
	this thing will time the delivery of a message of your liking
	$voyager timemsg [{'-r / --repeat' Q}] A ({@ ID} / "B")
	$voyager timemsg 3600 "Timed Message"
		that will send "Timed Message" to the channel the command was passed every hour
	-r : will repeat the action Q number of times (if Q >= 0, unlimited)
	@ : will fetch that msgID, sending its contents as specified
	everything else will be ignored
	
	i didn't, nor will I, put a brake to the min time the bot will use as timer
	*/
	var loger = [0, 0, 0];
	/*
		0: time (interval in seconds)
		1: message
		2: repeat
	*/
	
	switch(typeof (parseInt(mbits[0]) || mbits[0])){ /*deals with lack of -r*/
		case 'number':
			loger[0] = parseInt(mbits[0]);
			if(mbits[1] === "@" && mbits[2]) {
				try {
					loger[1] = last_msg.channel.fetchMessage(mbits[2]).content;
				} catch(err) {
					channel.send(!parseInt(mbits[2]) ? "malformed request, " + 
					"ID parameter MUST be an integer" : "unknown error, try again");
					channel.send("" + err);
					return;
				}
			} else {
				loger[1] = mbits[1].substring(1, mbits[1].length - 1);
			}
			loger[2] = false;
		break;
		case 'string':
			if(mbits[0] === "-r" || mbits[0] === "--repeat"){
				loger[2] = true;
			} else {
				channel.send("malformed request: no string must be placed before the time" + " unless it is the option -r/--repeat");
				return;
			}
		break;
		/* there could be a better way to do this using tape cycling. too bad! */
	}
	global.vVIinters = [];
	global.vVIinters.push(setInterval(()=>{
		channel.write(loger[1]);
	}, loger[0]*1000));
};