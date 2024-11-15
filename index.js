import express from "express";
import dotenv from "dotenv";
import { supabase } from "./config/configSupabase.js";
import { Person } from "./models/personModel.js";
import { Car } from "./models/carModel.js";
import { SongModel, AlbumModel, ArtistModel } from "./models/songModel.js";
import {
  songController,
  artistController,
  albumController,
} from "./controller/songController.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hej verden!");
});

app.use(songController);

app.use(artistController);

app.use(albumController);

app.get("/persons", async (req, res) => {
  let person1 = {
    fname: "John",
    lname: "Doe",
    mail: "JohnDoe@gmail.com",
    birthday: 1990,
    job: "Baker",
    gender: "male",
  };
  let person2 = {
    fname: "Jane",
    lname: "Doe",
    mail: "JaneDoe@gmail.com",
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
    let greetings = new Person(
      person.fname,
      person.lname,
      person.birthday,
      person.mail,
      person.job
    );
    console.log(greetings.presentGreeting());
    console.log(greetings.presentAge());
    console.log(greetings.presentCard());
  });

  res.end();
});

app.get("/cars", async (req, res) => {
  let car1 = {
    brand: "Toyota",
    model: "Corolla",
    propellent: "Gasoline",
    mileage: 1000,
    year: 2020,
    color: "Red",
    km: 15000,
    description: "A reliable and fuel-efficient car.",
    price: 20000,
  };

  let car2 = {
    brand: "Tesla",
    model: "Model S",
    propellent: "Electric",
    mileage: 450,
    year: 2021,
    color: "Black",
    km: 5000,
    description: "A high-performance electric vehicle.",
    price: 80000,
  };

  let car3 = {
    brand: "Ford",
    model: "Mustang",
    propellent: "Gasoline",
    mileage: 200,
    year: 2019,
    color: "Blue",
    km: 20000,
    description: "A classic American muscle car.",
    price: 35000,
  };

  let cars = [car1, car2, car3];

  cars.forEach((car) => {
    let carInfo = new Car(
      car.brand,
      car.model,
      car.propellent,
      car.mileage,
      car.year,
      car.color,
      car.km,
      car.description,
      car.price
    );
    console.log(carInfo.presentCar());
    console.log(carInfo.presentAvgDistance().toFixed(0) + " km/year");
    console.log(
      carInfo.presentChargePerYear().toFixed(0) + " refuel/charges per year"
    );
  });

  res.end();
});

app.listen(process.env.PORT, () => {
  console.log("Express server kører....");
});
