import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.get("/about", (req, res) => {
  res.send("Dette er about siden...");
});

app.get("/contact", (req, res) => {
  res.send("Dette er kontakt siden...");
});

app.get("/products", (req, res) => {
  res.send("Dette er produkter siden...");
});

app.listen(process.env.PORT, () => {
  console.log("Express server kører....");
});