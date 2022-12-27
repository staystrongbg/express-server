import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Modal = { closeModal: React.Dispatch<React.SetStateAction<boolean>> };

const Modal = ({ closeModal }: Modal) => {
  const [description, setDescription] = useState(''); //quill
  const [inputs, setInputs] = useState({ title: '', image: '', author: '' });
  const INPUT_STYLE =
    'px-4 py-2 border-b border-gray-300 shadow-sm outline-none  ';

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePostNewBookForm = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/books', {
      title: inputs.title,
      image: inputs.image,
      author: inputs.author,
      description: description,
    });
    closeModal(false);
  };

  return (
    <div className='absolute  bg-white/90 p-8 rounded-lg flex flex-col gap-32 items-center border-2 border-gray-200 shadow-lg w-full'>
      <span
        className='flex absolute top-2 right-4 text-xl bg-blue-200 rounded-full w-5 h-5 items-center justify-center text-white p-3 cursor-pointer'
        onClick={() => closeModal(false)}
      >
        x
      </span>
      <h3 className='text-3xl'>Add new Book</h3>
      <form className='flex gap-8 w-full' onSubmit={handlePostNewBookForm}>
        <div className=' flex flex-col flex-1'>
          <input
            required
            className={INPUT_STYLE}
            type='text'
            placeholder='Title'
            onChange={handleInputs}
            name='title'
          />
          <input
            required
            className={INPUT_STYLE}
            type='text'
            placeholder='image'
            onChange={handleInputs}
            name='image'
          />
          <input
            required
            className={INPUT_STYLE}
            type='text'
            placeholder='Author'
            onChange={handleInputs}
            name='author'
          />
        </div>
        <div className='flex-1'>
          <ReactQuill
            theme='snow'
            value={description}
            onChange={setDescription}
            className='bg-white min-h-[320px]'
          />
          <input
            type='submit'
            value='Add book'
            className='border border-green-600 bg-green-600 text-white font-bold rounded-sm hover:opacity-90 cursor-pointer py-2 px-4 mt-4'
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
