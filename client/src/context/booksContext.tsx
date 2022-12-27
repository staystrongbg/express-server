import { createContext, useEffect, useState, useContext } from 'react';
import { Books } from '../types/books';
import { Dispatch } from 'react';

type Props = {
  children: React.ReactNode;
};

type BooksContext = {
  books: Books[];
  setBooks: Dispatch<React.SetStateAction<Books[]>>;
  allBooks: Books[];
  setAllBooks: Dispatch<React.SetStateAction<Books[]>>;
};

const initialValue = {
  books: [],
  setBooks: () => {},
  allBooks: [],
  setAllBooks: () => {},
};

export const BookContext = createContext<BooksContext>(initialValue);

export const BookContextProvider = ({ children }: Props) => {
  const [books, setBooks] = useState<Books[]>([]);
  const [allBooks, setAllBooks] = useState<Books[]>([]);

  return (
    <BookContext.Provider value={{ books, setBooks, allBooks, setAllBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
