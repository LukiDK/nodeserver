import express from "express";
import dotenv from "dotenv";
import { supabase } from "./Config/configSupabase.js";

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

app.get("/songs", async (req, res) => {
  let { data, error } = await supabase.from("songs").select("id, title");
  if (error) {
    throw new Error(error.message);
  }

  let html = "<h1>Songs</h1><ul>";
  data.forEach((song) => {
    html += `<li>${song.id}: ${song.title}</li>`;
  });
  html += "</ul>";

  res.send(html);
  res.end();
});

app.get("/artists", async (req, res) => {
  let { data, error } = await supabase.from("artists").select("*");
  if (error) {
    throw new Error(error.message);
  }

  let html = "<h1>Artists</h1><ul>";
  data.forEach((artist) => {
    html += `<li><span style="font-weight: bold">${artist.name}</span> ${artist.description}</li>`;
  });
  html += "</ul>";

  res.send(html);
  res.end();
});

app.get("/albums", async (req, res) => {
  let { data, error } = await supabase.from("albums").select("title, image");
  if (error) {
    throw new Error(error.message);
  }

  let html = "<h1>Albums</h1><ul>";
  data.forEach((album) => {
    html += `<li><img src="${album.image}" alt="${album.title}" /> ${album.title}</li>`;
  });
  html += "</ul>";

  res.send(html);
  res.end();
});

app.listen(process.env.PORT, () => {
  console.log("Express server kører....");
});
