import express from 'express';

const app = express();

app.get('/teste', (req, res) => {
    return res.send("olá mundo nlw6");
});
app.post('/post', (req, res) => {
    return res.send("olá metodo post");
});
app.listen(3000, () => {
    console.log("server is running NLW");
});