import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import path from "path";
import { connectDatabase, getUserCollection } from "../src/utils/database";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URL dotenv variable");
}

const port = process.env.PORT || 3001;
const app = express();

// Connect to database
connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);

// Read all with mongoDB
app.get("/api/users/", async (_request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find();
  const allUsers = await cursor.toArray();
  response.send(allUsers);
});
