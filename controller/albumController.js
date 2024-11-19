import express from "express";
import { AlbumModel } from "../models/albumModel.js";

export const albumController = express.Router();
albumController.get("/albums", async (req, res) => {
  let albums = await AlbumModel.getAllRecords();

  res.send(albums);
});

albumController.post("/albums", async (req, res) => {
  const data = await AlbumModel.createRecord(req.body);
  res.send(data);
});

albumController.get("/albums/:id([0-9A-Za-z]*)", async (req, res) => {
  const single = await AlbumModel.getRecordById(req.params.id);
  res.send(single);
});

albumController.put("/albums", async (req, res) => {
  const data = await AlbumModel.updateRecord(req.body);
  res.send(data);
});

albumController.delete("/albums", async (req, res) => {
  const data = await AlbumModel.deleteRecord(req.body);
  res.send(data);
});
