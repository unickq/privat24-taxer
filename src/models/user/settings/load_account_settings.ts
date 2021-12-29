export interface load_account_settings {
    accountSettings: AccountSettings;
    mailOptions: MailOptions;
  }
  export interface AccountSettings {
    name: string;
    phone: string;
    email: string;
    language: string;
    trsgateSync: boolean;
    activated: boolean;
  }
  export interface MailOptions {
    newsList: boolean;
    digestList: boolean;
    subsList: boolean;
    notifyEvents: boolean;
    notifyLastDay: boolean;
    notifyDays: number;
    notifyAnswers: boolean;
    notifyKeys: boolean;
  }
  