import express, { Request, Response } from 'express';
import booksRoute from './routes/books';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/books', booksRoute);

app.listen(8080, () => console.log('Server is listening on port 8080!'));
