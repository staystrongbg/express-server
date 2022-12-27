import { useEffect, useState } from 'react';
import { Books } from '../types/books';
import { loadBooks } from '../api/loadBooks';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Search from '../components/Search';
import { useBookContext } from '../context/booksContext';
import Paginate from '../components/Paginate';
const Library = () => {
  const { books, setBooks, setAllBooks } = useBookContext();
  const [modal, setModal] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [booksPerPage] = useState(3);
  // const pageNum: number[] = [];
  // const idxOflLast = currentPage * booksPerPage;
  // const idxOfFirst = idxOflLast - booksPerPage;
  // const currentBook = books.slice(idxOfFirst, idxOflLast);
  // for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
  //   pageNum.push(i);
  // }
  // const paginate = (n: number) => {
  //   setCurrentPage(n);
  // };

  useEffect(() => {
    loadBooks(`/books`)
      .then((res) => {
        setBooks(res.data);
        setAllBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [modal]);

  useEffect(() => {
    setBooks(books);
  }, [books]);

  return (
    <div className='flex flex-col items-center relative'>
      {modal && <Modal closeModal={setModal} />}
      <Search />

      <button
        onClick={() => setModal(true)}
        type='button'
        className='shadow-md border-2 hover:opacity-80 bg-blue-400 px-4 py-2 rounded-full text-white font-bold self-center my-6'
      >
        +
      </button>
      <div className='flex items-center gap-10 flex-wrap'>
        {books.length > 0 ? (
          books.map((book) => {
            return (
              <div
                key={book.id}
                className='flex flex-col items-center  text-center gap-10  rounded-xl overflow-hidden px-8 py-4 my-4 w-[400px] h-fit border  border-transparent  hover:border-blue-200 hover:shadow-lg hover:-translate-y-2 transition-transform'
              >
                <div className='flex flex-col gap-8'>
                  <h2 className='text-4xl uppercase font-black text-slate-700'>
                    {book.title}
                  </h2>
                  <h3 className='text-3xl font-bold text-slate-500'>
                    {book.author}
                  </h3>
                </div>
                <Link to={`/library/${book.id}`}>
                  <img
                    src={book.img}
                    alt={book.title}
                    className='rounded-lg object-cover max-h-[300px]'
                  />
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: book.description.slice(0, 160) + '...',
                  }}
                />
              </div>
            );
          })
        ) : (
          <div className='flex flex-col items-center gap-8'>
            <h3 className='text-3xl text-gray-300'>no books in library</h3>
          </div>
        )}
      </div>
      {/* <div>
        <Paginate pageNum={pageNum} paginate={paginate} />
      </div> */}
    </div>
  );
};

export default Library;
