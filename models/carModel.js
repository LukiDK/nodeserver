export class Car {
  constructor(
    brand,
    model,
    propellent,
    mileage,
    year,
    color,
    km,
    description,
    price
  ) {
    this.brand = brand;
    this.model = model;
    this.propellent = propellent;
    this.mileage = mileage;
    this.year = year;
    this.color = color;
    this.km = km;
    this.description = description;
    this.price = price;
  }
  presentCar() {
    return `${this.brand} ${this.model} - ${this.year} - ${this.km} - ${this.propellent} - ${this.price}`;
  }
  presentAvgDistance() {
    return getAverageDistancePerYear(this.year, this.km);
  }
  presentChargePerYear = () => {
    const kmYear = getAverageDistancePerYear(this.year, this.km);
    return kmYear / this.mileage;
  }
}

function getAverageDistancePerYear(year, km) {
  const currentYear = new Date().getFullYear();
  const yearsUsed = currentYear - year;
  return km / yearsUsed;
}