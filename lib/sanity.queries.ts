import type { Gato } from "../types/gato";

export const gatosQuery = `*[_type == "gato"] | order(nome asc){
  _id,
  nome,
  idade,
  descricao,
  imagem
}`;

export type { Gato };
