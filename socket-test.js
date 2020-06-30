/* eslint-disable @typescript-eslint/no-var-requires */
const WebSocket = require('ws');

async function test() {
	console.log("Opening socket at port 3030 - this should work");
	await new Promise((res, rej) => {
		const sock = new WebSocket('http://localhost:3030');
		sock.on('open', () => {
			console.log("Socket connection opened on port 3030");
			res(true);
		});
		sock.on('error', (e) => {
			console.error("Could not connect socket - did you start the server?");
			rej(e);
		});
	});
	console.log("\n\n\nUpgrading a connection at port 3000 - this should crash the server");
	await new Promise(res => {
		const sock = new WebSocket;
		sock = new WebSocket('http://localhost:3000');
		sock.on('error', () => {
			console.error('Server crashed (probably)');
			res(true);
		});
	});
}

test();
