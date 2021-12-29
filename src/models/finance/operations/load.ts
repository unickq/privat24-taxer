import { Paginator } from "src/models/finance/account/load";

export interface operations_load {
  operations?: OperationsEntity[] | null;
  paginator: Paginator;
  currencies?: string[] | null;
}
export interface OperationsEntity {
  id: number;
  type: string;
  comment: string;
  exchangeDifference?: null;
  contents?: ContentsEntity[] | null;
  contractorName?: string | null;
}
export interface ContentsEntity {
  id: number;
  accountTitle: string;
  accountCurrency: string;
  comment: string;
  timestamp: number;
  sumCurrency: number;
}
