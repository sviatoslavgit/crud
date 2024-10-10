import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [release_date, setReleaseDate] = useState(0);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async() => {
    try{
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json()
      setBooks(data);
    }catch(err){
      console.log(err);
    }
  };
  
  const addBook = async () => {
    const bookData = {
      title,
      release_date: release_date,
    };
    try {
    const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    const data = await response.json();
    console.log(data);
  }catch (err) {
    console.log(err);
  };}
  return (
    <>
      <h1>Book Website</h1>

      <div>
        <input 
        type='text' 
        placeholder='Book Title...' 
        onChange={(e) => setTitle(e.target.value)}
        />
        <input
        type='text' 
        placeholder='Release Date'
        onChange={(e) => setReleaseDate(e.target.value)}
        />
        <button onClick={addBook}>Add book</button>
      </div>
      {books.map((book) =>( 
        <div>
          <p>Title: {book.title}</p>
          <p>Release Year: {book.release_date}</p>
        </div>
      ))}
    </>
  )
}

export default App

