import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Books } from '../types/books';
import { useNavigate } from 'react-router-dom';
import { loadBooks } from '../api/loadBooks';
const Book = () => {
  const [book, setBook] = useState<Books | null>(null);
  const { bookId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadBooks(`/books/${bookId}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err.data));
  }, [bookId]);

  const removeBook = async (id: number) => {
    await axios.delete(`http://localhost:8080/api/books/${bookId}`);
    navigate('/library');
  };

  return (
    <div className='w-full my-32'>
      {book ? (
        <div className='flex justify-around w-full'>
          <img
            src={book.img}
            alt={book.title}
            className='max-w-[350px] max-h-[500px] object-cover'
          />
          <div className='max-w-[600px]'>
            <h1 className='text-6xl font-black mb-24'>{book?.title}</h1>
            <p
              className='text-lg text-gray-600'
              dangerouslySetInnerHTML={{ __html: book.description }}
            />

            <p className='text-base text-gray-500'>
              {moment(book.createdAt).format('DD. MMMM YYYY.')}
            </p>
            <button
              className='self-end bg-red-400 text-white px-2 py-1 rounded-md hover:shadow-md'
              onClick={() => removeBook(book.id)}
            >
              Remove this Book
            </button>
          </div>
        </div>
      ) : (
        <h3>Not Found...</h3>
      )}
    </div>
  );
};

export default Book;
