export interface load_account {
    account: Account;
  }
  export interface Account {
    accountId: number;
    accountName: string;
    users?: (UsersEntity)[] | null;
    appletToken: string;
    hashId: string;
    agreement: boolean;
    language: string;
  }
  export interface UsersEntity {
    id: number;
    name: string;
    titleName: string;
    isCompany: boolean;
    isPayable: boolean;
    subscription: Subscription;
    idKey: string;
  }
  export interface Subscription {
    isPaid: boolean;
    isFree: boolean;
    wasPaid: boolean;
    expiresDate: string;
    availableToPay: boolean;
    isInCart: boolean;
  }
  