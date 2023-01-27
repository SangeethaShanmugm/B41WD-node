import express from "express";
import bcrypt from "bcrypt";
import { genPassword, createUser, getUserByName } from "../helper.js";
import jwt from "jsonwebtoken";
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
  if (
    !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/g.test(
      password
    )
  ) {
    res.status(400).send({ message: "Password pattern does not match" });
    return;
  }
  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
  //Username already exist
  if (!userFromDB) {
    res.status(400).send({ message: "Invalid Credentials" });
    return;
  }
  const storedDbPassword = userFromDB.password;
  const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
  if (!isPasswordMatch) {
    res.status(400).send({ message: "Invalid Credentials" });
    return;
  }
  //token
  const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);

  res.send({ message: "Successful login", token: token });
});

export const usersRouter = router;

//Validate if username already present
//validate if password matches

//store the user details - users collections - username & hashedPassword
