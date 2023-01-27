import express from "express";
import {
  getBooks,
  getBookByID,
  deleteByID,
  AddBook,
  EditBook,
} from "../helper.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

//get language
router.get("/", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  //   if (!language) {
  //     res.status(404).send({ message: "No language found" });
  //   }
  console.log(req.query);
  const book = await getBooks(req);
  res.send(book);
});

//books/id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await getBookByID(id);
  console.log(book);
  book ? res.send(book) : res.status(404).send({ message: "No book found" });
});

//Delete id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await deleteByID(id);
  console.log(book);
  book ? res.send(book) : res.status(404).send({ message: "No book found" });
});

//POST book
//inbuilt middleware
//say data is in json
router.post("/", async (req, res) => {
  const newBook = req.body;
  console.log(newBook);
  const result = await AddBook(newBook);
  res.send(result);
});

//Update book
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  console.log(updatedBook);
  const result = await EditBook(id, updatedBook);
  res.send(result);
});

export const bookRouter = router;
