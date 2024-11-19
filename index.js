import express from "express";
import dotenv from "dotenv";

import { songController } from "./controller/songController.js";
import { artistController } from "./controller/artistController.js";
import { albumController } from "./controller/albumController.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.use(songController);

app.use(artistController);

app.use(albumController);

app.listen(process.env.PORT, () => {
  console.log("Express server kører....");
});
