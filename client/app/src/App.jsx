import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Book Website</h1>

      <div>
        <input type='text' placeholder='Book Title...'></input>
        <input type='number' placeholder='Release Date'></input>
        <button>Add book</button>
      </div>
    </>
  )
}

export default App

