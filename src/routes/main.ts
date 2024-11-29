import { Router } from 'express';
import { createUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
    const user = await createUser({
        name: "Pedro",
        email: "pedro@gmail.com"
    });

    res.json({ user });
})