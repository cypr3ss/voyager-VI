module.exports = (channel, client) => {
	client.destroy();
	console.log('logged out, closing cli...');
	process.exit();
};
