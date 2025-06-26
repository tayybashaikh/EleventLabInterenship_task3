# 📚 Book API using Node.js & Express.js

This is a simple REST API built using *Node.js* and *Express.js* to manage a list of books.  
You can perform full *CRUD operations (Create, Read, Update, Delete)*.  
All data is stored in memory (no database used).


## 🔧 Features

- GET /books → Fetch all books  
- POST /books → Add a new book  
- PUT /books/:id → Update a book by ID  
- DELETE /books/:id → Delete a book by ID  

## 🛠 Tech Stack

- Node.js  
- Express.js  
- Thunder Client (for testing API)


## ▶ How to Run Locally

1. Clone the repository  
2. Run npm install  
3. Run node index.js  
4. Open [http://localhost:3000/books](http://localhost:3000/books) in Thunder Client


## 📩 Sample POST Request (JSON)

```json
{
  "title": "Wings of Fire",
  "author": "A.P.J. Abdul Kalam"
}
