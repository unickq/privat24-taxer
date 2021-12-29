import { Paginator } from "src/models/finance/account/load";

export interface account_load {
    contractors?: (ContractorsEntity)[] | null;
    paginator: Paginator;
  }
  export interface ContractorsEntity {
    id: number;
    title: string;
    juridicalAddress?: null;
    postAddress?: null;
    payerStatus?: null;
    idkey?: string | null;
    delegateName?: string | null;
    delegatePost?: null;
    tfDelegatePost?: null;
    contacts?: null;
    isForeign: number;
    accounts?: (AccountsEntity)[] | null;
  }
  export interface AccountsEntity {
    id: number;
    num: string;
    bank?: null;
    mfo?: null;
    currency: string;
    tfSwift?: null;
    tfBankPlace?: null;
  }