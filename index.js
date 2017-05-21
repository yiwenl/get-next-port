const getPort = require('get-port');

const getNextPort = port => new Promise((resolve, reject) => {
	getPort(port).then(_port => {
		if (_port === port) {
			resolve(_port);
		} else {
			port++;
			return getNextPort(port).then(resolve, reject);
		}
	});
});

module.exports = startingPort => startingPort ?
				getNextPort(startingPort) :
				getNextPort(8081);
