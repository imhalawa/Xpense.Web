import { toCents } from "./../../typings/models/IMoney";
import { IMerchant, ITag } from "../../typings";
import { ITransactionFormData } from "../../typings/forms/ITransactionFormData";
import { IMoney, createMoney } from "../../typings/models/IMoney";

export interface ITransactionRequest {
  amount: IMoney;
  accountNumber: string;
  categoryId: number;
  merchant: IMerchant;
  tags: ITag[];
}

export const fromTransactionFormData = (transaction: ITransactionFormData): ITransactionRequest => {
  return {
    // TODO: Represent in a better way, the idea here is to convert to cents (/100)
    amount: toCents(createMoney(transaction.amount, transaction.currency)),
    accountNumber: transaction.account!.accountNumber,
    categoryId: transaction.category!.id!,
    merchant: transaction.merchant!,
    tags: transaction.tags!,
  };
};