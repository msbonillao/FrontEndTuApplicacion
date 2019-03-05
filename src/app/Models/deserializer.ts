

// Interface de deserializacion
export interface Deserializable {
  deserialize(input: any): this;
}
