import express from "express";
import { SongModel } from "../models/songModel.js";

export const songController = express.Router();
export const artistController = express.Router();
export const albumController = express.Router();

songController.get("/songs", async (req, res) => {
  let songs = await SongModel.getAllRecords();

  res.send(songs);
});

songController.post("/songs", async (req, res) => {
  const data = await SongModel.createRecord(req.body);
  res.send(data);
});

songController.get("/songs/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await SongModel.getRecordById(req.params.id);
  res.send(single);
});