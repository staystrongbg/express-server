import { Request, Response } from 'express';

export const getBooks = (req: Request, res: Response) => {
  res.json('this is endpoint for booklist');
};

export const getBook = (req: Request, res: Response) => {
  const { bookId } = req.params;
  res.json(`this endpoint is a book with id: ${bookId}`);
};

export const deleteBook = (req: Request, res: Response) => {
  const { bookId } = req.params;
  res.json(`this endpoint deletes book with id: ${bookId} controller`);
};

export const addBook = (req: Request, res: Response) => {
  res.json(`this endpoint adds new book`);
};
