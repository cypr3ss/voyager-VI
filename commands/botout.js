module.exports = (channel, last_msg, client) => {
	client.destroy();
	console.log('logged out, closing cli...');
	process.exit();
};
