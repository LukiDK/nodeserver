import express from "express";
import { ArtistModel } from "../models/artistModel.js";

export const artistController = express.Router();

artistController.get("/artists", async (req, res) => {
  let artists = await ArtistModel.getAllRecords();

  res.send(artists);
});

artistController.post("/artists", async (req, res) => {
  const data = await ArtistModel.createRecord(req.body);
  res.send(data);
});

artistController.get("/artists/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await ArtistModel.getRecordById(req.params.id);
  res.send(single);
});
