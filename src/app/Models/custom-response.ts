import {Contact} from "./contact";
import {Deserializable} from "./deserializer";


export class CustomResponse implements Deserializable{
    info: any;
    results: Contact[];
  constructor(){}
  deserialize(input: any): this {
    Object.assign(this, input);
    this.results = input.results[0].map((contact: Contact) => new Contact().deserialize(contact));
    return this;
  }
}
