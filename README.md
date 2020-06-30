## Description
 Reproduction repository for [nest.js #4968](https://github.com/nestjs/nest/issues/4968)

This repository contains a new nestjs app (nest 7.4.1) created using `nest new`-command.

It contains two gateways, one listening at the express-server's port (3000) another one at (3001). The chosen WebSocket-Adapter is `ws`, which is configured as descibed in the docs 

Connecting to the server (i.e. 3000) and upgrading the connection fails due to the bug described in [#4968](https://github.com/nestjs/nest/issues/4968).
Connecting to the 3030 (which has a dedicated WS-server) works properly.

## Installation

```bash
$ npm install
```

## Running the app

Start the server: `npm run start:debug`
And in another terminal run: `node socket-test.js`

The last command runs a script which just tries to connect to both gateways. The seccond connection (to 3000) will crash the server.
