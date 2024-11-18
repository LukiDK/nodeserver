import express from "express";
import { SongModel, ArtistModel, AlbumModel } from "../models/songModel.js";

export const songController = express.Router();
export const artistController = express.Router();
export const albumController = express.Router();

songController.get("/songs", async (req, res) => {
  let songs = await SongModel.getAllRecords();

  res.send(songs);
});

songController.get("/songs/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await SongModel.getRecordById(req.params.id);
  res.send(single);
});

artistController.get("/artists", async (req, res) => {
  let artists = await ArtistModel.getAllRecords();

  res.send(artists);
});

artistController.get("/artists/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await ArtistModel.getRecordById(req.params.id);
  res.send(single);
});

albumController.get("/albums", async (req, res) => {
  let albums = await AlbumModel.getAllRecords();

  res.send(albums);
});

albumController.get("/albums/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await AlbumModel.getRecordById(req.params.id);
  res.send(single);
});
