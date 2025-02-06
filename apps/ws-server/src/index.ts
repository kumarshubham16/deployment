import { WebsocketServer } from 'ws';
import { client } from "@repo/db/client";

const server = new WebsocketServer({
    port: 3001
});

server.on('connection', (socket) => {
    client.user.create({
        data: {
            username: Math.random().toString(36).substring(7),
            password: Math.random().toString(36).substring(7)
        }
    })
});
