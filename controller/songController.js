import express from "express";
import { SongModel, ArtistModel, AlbumModel } from "../models/songModel.js";

export const songController = express.Router();
export const artistController = express.Router();
export const albumController = express.Router();

songController.get("/songs", async (req, res) => {
  let songs = await SongModel.getAllRecords();

  res.send(songs);
});

artistController.get("/artists", async (req, res) => {
  let artists = await ArtistModel.getAllRecords();

  res.send(artists);
});

albumController.get("/albums", async (req, res) => {
  let albums = await AlbumModel.getAllRecords();

  res.send(albums);
});
