import { useEffect, useState } from 'react';
import { useBookContext } from '../context/booksContext';

const INPUT_STYLE = 'px-4 py-2 border-b border-gray-300 shadow-sm outline-none';

const Search = () => {
  const { allBooks, setBooks } = useBookContext();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      setBooks(
        allBooks.filter(
          (b) =>
            b.title.toLowerCase().includes(search) ||
            b.author.toLowerCase().includes(search)
        )
      );
    } else {
      setBooks(allBooks);
    }
  }, [search]);
  return (
    <div className='self-end text-lg text-gray-500'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='search book or author'
        className={`${INPUT_STYLE} placeholder:text-gray-400`}
      />
    </div>
  );
};

export default Search;
