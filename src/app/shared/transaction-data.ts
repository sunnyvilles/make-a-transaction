export interface ITransactionData {
  dates: {
    valueDate: number;
  };
  transaction: Transaction;
  merchant: {
    name: string;
  };
}

interface Transaction {
  amountCurrency: {
    amount: string;
  };
}
