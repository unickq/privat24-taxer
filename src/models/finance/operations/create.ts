import { AccountsEntityShort } from "src/models/finance/account/load";
import { ContractorsEntity } from "src/models/finance/contractors/load";

export interface operations_create {
  userId: number;
  operation: Operation;
}

export type OperationType = "FlowOutgo" | "FlowIncome";
export type FinanceOutGoType =
  | "custom"
  | "en"
  | "esv"
  | "moneyback"
  | "commission";
export type FinanceIncomeType =
  | "custom"
  | "custom_free"
  | "custom_debts"
  | "tax15_1"
  | "tax15_2"
  | "tax15_3"
  | "tax_free";

export interface Operation {
  id?: null;
  type: OperationType;
  comment?: string;
  contents?: null[] | null;
  timestamp: number;
  payedSum?: null;
  financeType: string;
  contractor?: ContractorsEntity;
  account?: AccountsEntityShort;
  total: number;
}
