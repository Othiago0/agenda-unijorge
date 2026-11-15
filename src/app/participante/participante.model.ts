import { FormaPagamento } from '../models/forma-pagamento';

export interface Participante {
  id: number;
  eventoId: number;
  descricao: string;
  telefone: string;
  formaPagamento: FormaPagamento;
}
