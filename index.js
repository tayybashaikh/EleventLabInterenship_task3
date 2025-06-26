const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample book data
let books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT to update a book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { id, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const originalLength = books.length;
  books = books.filter(book => book.id !== id);
  if (books.length < originalLength) {
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log (`Server running at http://localhost:${port}`);
});