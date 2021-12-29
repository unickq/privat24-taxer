import xlsx from "node-xlsx";
import { register } from "ts-node";

export const parsePbStatement = (file: string): Array<IPrivatBankStatement> => {
  const workSheetsFromFile = xlsx.parse(file);
  if (workSheetsFromFile.length === 0) {
    return [];
  }
  const data = workSheetsFromFile[0].data;
  if (data.length === 0) {
    return [];
  }
  let array = data.splice(5, data.length - 1);

  let result: Array<IPrivatBankStatement> = [];
  array.forEach((el) => {
    if (el && Array.isArray(el) && el.length === 11) {
      result.push({
        number: el[0],
        date: el[1],
        time: el[2],
        amount: el[3],
        currency: el[4],
        purpose: el[5],
        edrpou: el[6],
        counterparty_name: el[7],
        counterparty_iban: el[8],
        counterparty_mfo: el[9],
        reference: el[10],
      });
    }
  });
  return result;
};

export function buildUnixTime(statement: IPrivatBankStatement): number {
  const day = statement.date.split(".")[0];
  const months = statement.date.split(".")[1];
  const year = statement.date.split(".")[2];
  const hh = statement.time.split(":")[0];
  const mm = statement.time.split(":")[1];
  return new Date(`${months}/${day}/${year} ${hh}:${mm}:00`).getTime() / 1000;
}

export interface IPrivatBankStatement {
  number: string;
  date: string;
  time: string;
  amount: number;
  currency: string;
  purpose: string;
  edrpou: string;
  counterparty_name: string;
  counterparty_iban: string;
  counterparty_mfo: string;
  reference: string;
}
