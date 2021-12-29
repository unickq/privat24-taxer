export interface account_load {
  accounts?: AccountsEntity[] | null;
  accountsCurrencies?: string[] | null;
  paginator: Paginator;
}

export interface AccountsEntityShort {
  id: number;
  title?: string;
  currency?: string;
}

export interface AccountsEntity extends AccountsEntityShort {
  balance: number;
  num?: string | null;
  bank?: string | null;
  mfo?: null;
  comment?: null;
  tfBankPlace?: null;
  tfBankSwift?: null;
  tfBankCorr?: null;
  tfBankCorrPlace?: null;
  tfBankCorrSwift?: null;
  tfBankCorrAccount?: null;
}
export interface Paginator {
  currentPage: number;
  recordsOnPage: number;
  totalPages: number;
}
