import { client } from "./index.js";
import bcrypt from "bcrypt";
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

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); //bcrypt.genSalt(no.of.rounds)
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b41wd")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("b41wd")
    .collection("users")
    .findOne({ username: username });
}
