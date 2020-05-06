# RPC Client in NodeJS

![hero](https://res.cloudinary.com/ichtrojan/image/upload/v1588771860/Screenshot_2020-05-06_at_14.29.28_bub5m3.png)

## Introduction

This codebase was built as a demo to practice RPC with [Go](https://golang.org) and [Javascript (node)](http://nodejs.org).
The RPC server was built in Go, you can find the codebase [here](https://github.com/ichtrojan/grpc-server).

## Prerequisites
* Protobuf installed on you machine
* NodeJS installed on your Machine
* Basic understanding of the basics of RPC
* Fundamental knowledge of NodeJS
* Fundamental knowledge of Go (to set up the RPC server)

## Installation

* clone this repo by running:

```bash
git clone https://github.com/ichtrojan/node-rpc-client.git
```

* change directory into the repo:

```bash
cd node-rpc-client
```

* Install dependencies:

```bash
npm install
```

* Create `.env` frile from sample:

```bash
cp .env.example .env
```

* Run the client

```bash
node client.js
```

By default, the client will listen on `localhost` via port `9000`. which is what was duplicated from the `.env.example` file and also what is defined in the RPC server config assuming all configuration are left as default.

## Conclusion

I would normally explain what every line does. But, I do not have the mental bandwidth to do so at the moment.
You can take a look at the hero image at the top, my IDE did its best to explain what each parameter does.

Regards <br/>
Michael Trojan Okoh 
