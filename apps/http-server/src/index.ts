// create a express app server 
import * as express from 'express';
import { client } from "@repo/db/client";

const app = express.default();

app.use(express.json());
const PORT = 3002;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            username,
            password
        }
    })
    res.json({
        message: 'User created successfully',
        id: user.id
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


