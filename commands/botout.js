module.exports = (channel, last_msg, client) => {
	console.log('logged out, closing cli...');
	client.destroy();
	process.exit();
};
