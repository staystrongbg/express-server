import axios from 'axios';

export async function loadBooks(url: string) {
  return await axios.get(`http://localhost:8080/api${url}`);
}
