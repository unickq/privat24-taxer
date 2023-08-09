import dotenv from "dotenv";
dotenv.config();
import { buildUnixTime, parsePbStatement } from "./helper";
import axios from "axios";
import { operations_create } from "src/models/finance/operations/create";
import { AccountsEntityShort } from "src/models/finance/account/load";

const file = `data/${process.env.XLS_FILE_NAME!}`;
const pbData = parsePbStatement(file);
const userId = Number.parseInt(process.env.TAXER_FOP_ID!);
const account: AccountsEntityShort = {
  id: Number.parseInt(process.env.TAXER_BANK_ID || "0"),
};

const instance = axios.create({
  withCredentials: true,
  headers: {
    cookie: process.env.TAXER_COOKIE!,
    accept: "application/json, text/plain, */*",
  },
  baseURL: "https://taxer.ua",
});

(async () => {
  for (let i = 0; i < pbData.length; i++) {
    let x = pbData[i];
    const data: operations_create = {
      userId,
      operation: {
        id: null,
        type: x.amount > 0 ? "FlowIncome" : "FlowOutgo",
        comment: x.purpose,
        contents: [],
        timestamp: buildUnixTime(x),
        payedSum: null,
        financeType: "custom",
        account,
        total: x.amount < 0 ? x.amount * -1 : x.amount,
      },
    };
    console.log(`${i} ${data.operation.comment}`);
    const resp = await instance.post(
      "/api/finances/operation/create?lang=ru",
      {operations: [data]}
    );
    console.log(resp.statusText);
  }
})();
