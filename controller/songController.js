import express from "express";
import { SongModel } from "../models/songModel.js";

export const songController = express.Router();

songController.get("/songs", async (req, res) => {
    let songs = await SongModel.getAllRecords();

    res.send(songs)
});
