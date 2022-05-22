import express from 'express';
import cors from 'cors';
const port = process.env.PROT || 4000;

const app = express();

app.use(cors('*'));

// welcome route
app.get('/', async (req, res) => {
    res.send('hello fro docke practise');
})

// new route
app.get('/amit', async (req, res) => {
    res.send("hello amit new commit");
})

// start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

// https://github.com/codewithamitpatil/gitpractise.git