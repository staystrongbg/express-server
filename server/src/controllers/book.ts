import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBooks = async (req: Request, res: Response) => {
  const bookList = await prisma.books.findMany({});

  res.json(bookList);
};

export const getBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const book = await prisma.books.findUnique({
    where: {
      id: +bookId,
    },
  });
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const books = await prisma.books.delete({
    where: {
      id: +bookId,
    },
  });

  res.json(books);
};

export const addBook = async (req: Request, res: Response) => {
  const { id, title, author, description, image, createdAt } = req.body;
  console.log(title, author);
  const book = await prisma.books.create({
    data: {
      title,
      author,
      description,
      img: image,
      createdAt,
    },
  });
  res.json(book);
};
