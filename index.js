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

app.get("/test", async (req, res) => {
  let { data, error } = await supabase.from("songs").select("id, title");
  if (error) {
    throw new Error(error.message);
  } else {
    console.log(data);
    return data;
  }
});

app.listen(process.env.PORT, () => {
  console.log("Express server kører....");
});
