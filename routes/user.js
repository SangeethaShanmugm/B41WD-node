import express from "express";
import { genPassword, createUser, getUserByName } from "../helper.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const isuserExist = await getUserByName(username);
  console.log(isuserExist);
  //Username already exist
  if (isuserExist) {
    res.status(400).send({ message: "Username already taken" });
    return;
  }
  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  res.send(result);
});

export const usersRouter = router;

//Validate if username already present
//validate if password matches

//store the user details - users collections - username & hashedPassword
