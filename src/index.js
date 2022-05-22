import express from 'express';
import cors from 'cors';
const port = process.env.PROT || 4000;

const app = express();

app.use(cors('*'));

// welcome route
app.get('/', async (req, res) => {
    res.send('hello fro docke practise');
})


// new route 6666
app.get('/', async (req, res) => {
    res.send('hello 7777');
})

// start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

// https://github.com/codewithamitpatil/gitpractise.git