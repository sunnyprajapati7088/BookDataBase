const express = require('express')
const bookrouter = express.Router();
const {
  addBook,
  getAllBook,
  getBookByGenre,
  deleteBookByTitle,
  updateBook
} = require("../controller/bookController");

bookrouter.post("/add", addBook);
bookrouter.get("/genre/:genre", getBookByGenre);
bookrouter.get("/", getAllBook);
bookrouter.delete("/delete/:title", deleteBookByTitle);
bookrouter.put("/update/:title", updateBook);
module.exports = bookrouter;