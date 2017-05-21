# get-next-port

Get next available port.

## Install

```
$ npm install --save get-next-port
```


## Usage
```js
const getNextPort = require('get-next-port');

getNextPort().then(port => {
	console.log(port);
	// => 8081
});

```

Or you can pass in a port :

```js
	const getNextPort = require('get-next-port');

	getNextPort(8000).then(port => {
		console.log(port);
		// will return if 8000 is available
		// otherwise increase port number by 1 until find the available port	
	});
```


## Related

- [get-port](https://github.com/sindresorhus/get-port) - Based on this module


## License

MIT © [Yi-Wen Lin](https://yiwenl.github.io/)
