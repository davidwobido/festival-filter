import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import {
  connectDatabase,
  getUserCollection,
  getFestivalCollection,
} from "./utils/Database";

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

// USERS

// Read all users with mongoDB
app.get("/api/users/", async (_request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find();
  const allUsers = await cursor.toArray();
  response.send(allUsers);
});

// Read one user with mongoDB
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

// Post user with mongoDB
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

// Delete user with mongoDB
app.delete("/api/users/:username", async (request, response) => {
  const userCollection = getUserCollection(); // Datenbank
  const user = request.params.username; //Eingabe

  const isUserKnown = await userCollection.findOne({
    username: user,
  });
  if (isUserKnown) {
    userCollection.deleteOne({ username: user });
    response.send(isUserKnown);
  } else {
    response.status(404).send("User does not exist");
  }
});

// FESTIVALS

// Read all festivals with mongoDB
app.get("/api/festivals/", async (_request, response) => {
  const festivalCollection = getFestivalCollection();
  const cursor = festivalCollection.find();
  const allFestivals = await cursor.toArray();
  response.send(allFestivals);
});

// Read one festival with mongoDB
app.get("/api/festivals/:name", async (request, response) => {
  const festivalCollection = getFestivalCollection(); // Datenbank
  const festival = request.params.name; //Eingabe

  const isFestivalKnown = await festivalCollection.findOne({
    name: festival,
  });
  if (isFestivalKnown) {
    response.status(200).send(isFestivalKnown);
  } else {
    response.status(404).send("Festival does not exist");
  }
});

// Post festival with mongoDB
app.post("/api/festivals", async (request, response) => {
  const festivalCollection = getFestivalCollection();
  const newFestival = request.body;

  if (
    typeof newFestival.name !== "string" ||
    typeof newFestival.location !== "string" ||
    typeof newFestival.begin !== "string" ||
    typeof newFestival.end !== "string" ||
    typeof newFestival.visitors !== "string" ||
    typeof newFestival.acts !== "string" ||
    typeof newFestival.price !== "string"
  ) {
    response.status(400).send("Missing properties");
    return;
  }
  const isFestivalKnown = await festivalCollection.findOne({
    name: newFestival.name,
  });
  if (isFestivalKnown) {
    response.status(409).send(newFestival + " already exist.");
  } else {
    festivalCollection.insertOne(newFestival);
    response.send(newFestival.name + " added");
  }
});

// Delete festival with mongoDB
app.delete("/api/festival/:name", async (request, response) => {
  const festivalCollection = getFestivalCollection();
  const festival = request.params.name;

  const isFestivalKnown = await festivalCollection.findOne({
    name: festival,
  });
  if (isFestivalKnown) {
    festivalCollection.deleteOne({ name: festival });
    response.send(request.params.name + " deleted");
  } else {
    response.status(404).send("Festival does not exist");
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
