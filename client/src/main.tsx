import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import { BookContextProvider } from './context/booksContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </BrowserRouter>
);
