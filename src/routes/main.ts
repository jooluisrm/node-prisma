import { Router } from 'express';
import { createUser, createUsers, getAllUsers, getUserByEmail, updateUser } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
    const user = await createUser({
        name: "Teste50",
        email: "teste10@hotmail.com",
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

mainRouter.get("/users", async (req, res) => {
    const result = await getAllUsers();
    res.json({ result });
})

mainRouter.get("/user", async (req, res) => {
    const result = await getUserByEmail('joao@gmail.com');
    res.json({ result });
});

mainRouter.put("/user", async (req, res) => {
    const result = await updateUser();
    res.json({ result });
})