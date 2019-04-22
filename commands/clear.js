module.exports = (channel) =>{
	let lengther = 0;
	channel.fetchMessages().then(messages => {
		lengther = Array.from(messages).length - 1;
	});
	channel.bulkDelete(lengther);
};
