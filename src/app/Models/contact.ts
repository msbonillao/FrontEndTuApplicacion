import {Deserializable} from "./deserializer";

export class Contact implements Deserializable{
  first: String;
  last: String;
  email: String;
  constructor(){}
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
