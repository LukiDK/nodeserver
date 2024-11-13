import express from "express";
import dotenv from "dotenv";
import { supabase } from "./config/configSupabase.js";
import { Person, Age, Card } from "./assets/js/persons.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hej verden!");
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
    html += `<li><span style="font-weight: bold">${artist.name}</span><img style="max-width: 100px" src="${process.env.SUPABASE_URL}/storage/v1/object/public/images/${artist.image}"/></li>`;
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

app.get("/persons", async (req, res) => {
  let person1 = {
    fname: "John",
    lname: "Doe",
    mail: "JohnDoegmail.com",
    birthday: 1990,
    job: "Baker",
    gender: "male",
  };
  let person2 = {
    fname: "Jane",
    lname: "Doe",
    mail: "JaneDoegmail.com",
    birthday: 1995,
    job: "Carpenter",
    gender: "male",
  };
  let person3 = {
    fname: "Mike",
    lname: "Oxlong",
    mail: "MikeOxlong@gmail.com",
    birthday: 1942,
    job: "Web Developer",
    gender: "male",
  };

  let persones = [person1, person2, person3];

  persones.forEach((person) => {
    let greetings = new Person(person.fname, person.lname);
    console.log(greetings.present());

    let card = new Card(person.fname, person.lname, person.mail, person.job);
    console.log(card.present());

    let age = new Age(person.birthday);
    console.log(age.present());
  });

  res.end();
});

app.listen(process.env.PORT, () => {
  console.log("Express server kører....");
});
