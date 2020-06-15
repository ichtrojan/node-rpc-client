const dotenv = require('dotenv')

const GRPCClient = require('node-grpc-client')

const path = require("path")

const PROTO_PATH = path.resolve(__dirname, './proto/chat.proto')

dotenv.config()

const PORT = process.env.RPC_PORT
const HOST = process.env.RPC_HOST

const client = new GRPCClient(PROTO_PATH, 'chat', 'ChatService', `${HOST}:${PORT}`)

const message = {
    body: "Hello from Trojan",
}

const details = {
    name: "Trojan",
    age: 40
}

client.runService('SayHello', message, (err, res) => {
    console.log(res.body);
});

client.runService('GetDetails', details, (err, res) => {
    console.log(res.body);
});