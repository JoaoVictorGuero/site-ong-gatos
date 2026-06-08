import type { SanityImageSource } from "@sanity/image-url";

export type Gato = {
  _id: string;
  nome?: string;
  idade?: number;
  descricao?: string;
  imagem?: SanityImageSource;
};
