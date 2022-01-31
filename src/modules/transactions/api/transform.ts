import { Balance, TransactionResponse } from '../types';
import _ from 'lodash';

export const transformGetTransactions = (
  response: TransactionResponse[],
): Balance[] => {
  return getTransactionsPerUser(response);
};

const getTransactionsPerUser = (
  transactions: TransactionResponse[],
): Balance[] => {
  const balancePerUser = Object.assign({});
  transactions.map((transaction) => {
    if (!balancePerUser.hasOwnProperty(transaction.user_id)) {
      balancePerUser[transaction.user_id] = {
        userId: transaction.user_id,
        lastTransactionDate: transaction.timestamp,
        USD: transaction.currency === 'USD' ? transaction.amount : '-',
        GBP: transaction.currency === 'GBP' ? transaction.amount : '-',
        EUR: transaction.currency === 'EUR' ? transaction.amount : '-',
      };
    } else {
      const existingBalance = balancePerUser[transaction.user_id];
      existingBalance[transaction.currency] = transaction.amount;
      existingBalance.lastTransactionDate =
        new Date(transaction.timestamp).getTime() >
        new Date(existingBalance.lastTransactionDate).getTime()
          ? transaction.timestamp
          : existingBalance.lastTransactionDate;
    }
  });
  return _.values(balancePerUser);
};
