const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
});

app.get('/add',async(req, res) => {
    const { name, email, password } = req.query;

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
