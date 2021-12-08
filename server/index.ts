import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import { connectDatabase, getFestivalCollection } from "./utils/Database";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URL dotenv variable");
}

const port = process.env.PORT || 3001;
const app = express();

// For parsing application/json
app.use(express.json());

// Read all festivals with mongoDB
app.get("/api/festivals/", async (_request, response) => {
  const festivalCollection = getFestivalCollection();
  const cursor = festivalCollection.find().sort({ name: 1 });
  const allFestivals = await cursor.toArray();
  response.send(allFestivals);
});

// Search genre
app.get("/api/festivals/:genre", async (request, response) => {
  const festivalCollection = getFestivalCollection();
  const genre = request.params.genre;
  console.log(genre);
  // const isGenreKnown = await festivalCollection.find({
  //   name: genre,
  // });
  // if (isGenreKnown) {
  //   console.log(genre);
  // } else {
  //   console.log("not");
  // }

  const query = { electronic: { $gte: 20 } };
  console.log(query);
  const cursor = festivalCollection.find(query).sort({ name: 1 });
  const filteredFestivals = await cursor.toArray();
  console.log(filteredFestivals);
  response.send(filteredFestivals);
});

// // Read one festival with mongoDB
// app.get("/api/festivals/:name", async (request, response) => {
//   const festivalCollection = getFestivalCollection();
//   const festival = request.params.name;

//   const isFestivalKnown = await festivalCollection.findOne({
//     name: festival,
//   });
//   if (isFestivalKnown) {
//     response.status(200).send(isFestivalKnown);
//   } else {
//     response.status(404).send("Festival does not exist");
//   }
// });

// Post festival with mongoDB
app.post("/api/festivals", async (request, response) => {
  const festivalCollection = getFestivalCollection();
  const newFestival = request.body;

  if (
    typeof newFestival.name !== "string" ||
    typeof newFestival.location !== "string" ||
    typeof newFestival.begin !== "string" ||
    typeof newFestival.end !== "string" ||
    typeof newFestival.visitors !== "number" ||
    typeof newFestival.acts !== "number" ||
    typeof newFestival.price !== "number" ||
    typeof newFestival.allacts !== "string"
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

// Say Hello
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Connect to database
connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
