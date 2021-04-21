import express from 'express';
import "./database"
import { routes } from './routes'

const app = express();

app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
    return res.send('Hello World!');
});


app.post('/users', (req, res) => {
    return res.send('Rota POST');
})


app.listen(3333, () => {
    console.log('Listening on port 3333')
});