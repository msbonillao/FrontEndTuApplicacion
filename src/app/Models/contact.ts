import {Deserializable} from "./deserializer";


/*
* Este archivo contiene el modelo de Contacto, donde se almacena la información del API
* esta aproximacion facilita el mantenimiento y desarrollo del código
* * */

// Esta clase es global para el amnejo de los datos en lista y detallados  de un usuario
export class Contact implements Deserializable{
  first: string;
  last: string;
  email: string;
  phone: string;
  location: Location;
  picture: Picture;
  constructor(){}
  deserialize(input: any): this {
    Object.assign(this, input);
    this.location = new Location().deserialize(input.location);
    this.picture = new Picture().deserialize(input.picture);

    // Necesario para manejar un objeto general, ya que las respuestas del API difieren en estructura respecto al nombre
    if(input.name){
      this.first = input.name.first;
      this.last = input.name.last;
    }
    // Capitaliza la primera letra de los nombres y apellidos, solo para presentacion al Usuario
    if (this.last)
      this.last = this.last[0].toUpperCase() + this.last.slice(1);
    if(this.first) {
      this.first = this.first[0].toUpperCase() + this.first.slice(1);
    }
    return this;
  }
}

class Location implements Deserializable{
  street: String;
  coordinates: {latitude: string, longitude:string};
  constructor(){}
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}

class Picture implements Deserializable{
  large: String;
  medium: String;
  thumbnail: String;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }


}
