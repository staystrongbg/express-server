import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Library from './pages/Library';

function App() {
  return (
    <div className='min-h-screen lg:w-4/5 w-full flex items-center justify-between flex-col m-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/library' element={<Library />} />
        <Route path='/library/:bookId' element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
