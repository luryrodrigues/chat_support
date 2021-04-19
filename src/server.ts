import express from 'express';

const app = express();


app.get('/', (req, res) => {
    return res.send('Hello World!');
});


app.post('/users', (req, res) => {
    return res.send('Rota POST');
})


app.listen(3333, () => {
    console.log('Listening on port 3333')
});