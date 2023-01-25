import { client } from "./index.js";

export async function getBooks(req) {
  return await client.db("b41wd").collection("books").find(req.query).toArray();
}
export async function getBookByID(id) {
  return await client.db("b41wd").collection("books").findOne({ id: id });
}
export async function deleteByID(id) {
  return await client.db("b41wd").collection("books").deleteOne({ id: id });
}
export async function AddBook(newBook) {
  return await client.db("b41wd").collection("books").insertMany(newBook);
}
export async function EditBook(id, updatedBook) {
  return await client
    .db("b41wd")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBook });
}
