import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import { connectDatabase, getUserCollection } from "./utils/Database";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URL dotenv variable");
}

const port = process.env.PORT || 3001;
const app = express();

// For parsing application/json
app.use(express.json());

// Say Hello
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Read all with mongoDB
app.get("/api/users/", async (_request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find();
  const allUsers = await cursor.toArray();
  response.send(allUsers);
});

// Read one with mongoDB
app.get("/api/users/:username", async (request, response) => {
  const userCollection = getUserCollection(); // Datenbank
  const user = request.params.username; //Eingabe

  const isUserKnown = await userCollection.findOne({
    username: user,
  });
  if (isUserKnown) {
    response.status(200).send(isUserKnown);
  } else {
    response.status(404).send("User does not exist");
  }
});

// Post with mongoDB
app.post("/api/users", async (request, response) => {
  const userCollection = getUserCollection();
  const newUser = request.body;

  if (
    typeof newUser.name !== "string" ||
    typeof newUser.username !== "string" ||
    typeof newUser.password !== "string"
  ) {
    response.status(400).send("Missing properties");
    return;
  }
  const isUserKnown = await userCollection.findOne({
    username: newUser.username,
  });
  if (isUserKnown) {
    response.status(409).send(newUser + " already exist.");
  } else {
    userCollection.insertOne(newUser);
    response.send(newUser.name + " added");
  }
});

// Serve production bundle
app.use(express.static("dist"));

// Handle client routing, return all requests to the app
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../index.html"));
});

// Connect to database
connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
