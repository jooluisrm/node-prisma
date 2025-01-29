import { Router } from 'express';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
    const user = await createUser({
        name: "Teste10",
        email: "teste10@gmail.com",
        posts: {
            create: {
                title: 'Titulo de teste',
                body: 'Corpo de teste'
            }
        }
    });

    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(500).json({ error: "E-mail já cadastrado" });
    }
});

mainRouter.post("/users", async (req, res) => {
    const result = await createUsers([
        { name: 'Jão', email: 'jao@gmail.com' },
        { name: 'Jão 2', email: 'jao@gmail.com' },
        { name: 'Fulano', email: 'fulano@gmail.com' },
        { name: 'Ciclano', email: 'cliclano@gmail.com' }
    ]);

    res.json({ result });
});