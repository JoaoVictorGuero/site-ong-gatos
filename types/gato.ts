export type Gato = {
  id: string;
  nome: string;
  idade: number | null;
  descricao: string | null;
  foto_url: string | null;
  status: "disponivel" | "adotado";
  created_at: string;
};
