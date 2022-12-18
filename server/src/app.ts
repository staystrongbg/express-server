import express, { Request, Response } from 'express';
import booksRoute from './routes/books';

const app = express();
app.use(express.json());

app.use('/api/books', booksRoute);

app.listen(8080, () => console.log('Server is listening on port 6000!'));
