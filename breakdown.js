module.exports = (channel, last_msg, client) => {
	/*
	will reset all timers, clear 100 messages (avoid with -c), reset banlist (avoid
	with -b), clear all webhooks (-w) remove all invitation links (-i), unrole self
	except for VoyagerVI role (-r) & everyone else except lower roles (-e). it goes:
	$voyager breakdown [-c] [-b] [-w] [-i] [-r] [-e]
	do it in that order, or it won't take it
	this is not a threat, it is a guarantee
	*/
	/* here we fucking go */
	mbits = last_msg.substring(8).split(' ');
	/* i could make the bits be made by the main message event, but this works
	just as well :! */
};