import express from 'express';
import { addBook, deleteBook, getBook, getBooks } from '../controllers/book';

const router = express.Router();

router.get('/', getBooks);
router.get('/:bookId', getBook);
router.post('/', addBook);
router.delete('/:bookId', deleteBook);

export default router;
