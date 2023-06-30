import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng:number
  }
  constructor() {
    this.name = faker.name.firstName()
    console.log(this.location)
    this.location = {
      lat: faker.address.latitude(),
      lng:faker.address.longitude()
    }
}
  markerContent(): string{
  return `User Name: ${this.name}`
}
}





