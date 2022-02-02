export interface TransactionResponse {
  // eslint-disable-next-line camelcase
  user_id: string;
  timestamp: string;
  currency: string;
  amount: string;
}

export interface Transactions {
  userId: string;
  date: string;
  currency: string;
  amount: string;
}

export interface Balance {
  userId: string;
  lastTransactionDate: string;
  GBP: string;
  USD: string;
  EUR: string;
}
