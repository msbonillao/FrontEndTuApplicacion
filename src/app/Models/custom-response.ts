import {Contact} from "./contact";
import {Deserializable} from "./deserializer";


export class CustomResponse implements Deserializable{
    info: any;
    results: Contact[];
  constructor(){}
  deserialize(input: any): this {
    // Serializador de la respuesta del API a un objeto
    Object.assign(this, input);
    // Debido a que los resultados serán un arreglo de contactos, es encesario definir esto por separado
    this.results = input.results[0].map(contact=> new Contact().deserialize(contact));
    return this;
  }
}

export  class CustomResponseDetail implements Deserializable{
  info: any;
  results: Contact;
  constructor(){}
  deserialize(input: any): this {
    Object.assign(this, input);
    this.results = new Contact().deserialize(input.results[0]);
    return this
  }

}
