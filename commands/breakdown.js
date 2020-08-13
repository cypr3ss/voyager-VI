module.exports = (channel, last_msg, client) => {
	/*
    will reset all timers (avoid with -t), clear 100 messages (avoid with -c),
//  reset banlist (-b),
    clear all webhooks (-w), remove all invitation links (-i)
//  unrole self (-r)
//  & everyone else except lower roles (-e). it goes:
	$voyager breakdown [-t] [-c] [-w] [-i]
	*/
	/* here we fucking go */
	mbits = last_msg.content.substring(9).split(' ');
	/* i could make the bits be made by the main message event, but this works
    just as well :! */
    if (mbits.indexOf('-t') && mbits.indexOf('-c') && mbits.indexOf('-w') && mbits.indexOf('-i') /* && mbits.indexOf('-r') && mbits.indexOf('-e')*/) {
        channel.send("then what in the aurora should I do?");
    } else {
        if (!mbits.indexOf('-t')){
            global.vVIinters.forEach(inter, ()=>{
                clearInterval(inter);
                clearTimeout(inter);
            });}
        if (!mbits.indexOf('-c')) {
            channel.bulkDelete(100);
//          client.sweepMessages(20);
        }
//      if (!mbits.indexOf('-b')) {}
        if (!mbits.indexOf('-w')) {
            channel.fetchWebhooks().then((whooks)=> {
                whooks.forEach(whook, ()=>{whook.delete('Breaking down :))))))):');});
            });
        }
        if (!mbits.indexOf('-i')) {
            channel.fetchInvites().then((ivites)=>{
                ivites.forEach((ivite)=>{
                    ivite.delete('Breaking down :))))))):');
                });
            });
        }
//      if (!mbits.indexOf('-r')) {}
//      if (!mbits.indexOf('-e')) {}
    }
};
