import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransactionData } from '../shared/transaction-data';

const baseUrl = 'assets/';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  @Output()
  addTransaction: EventEmitter<ITransactionData> = new EventEmitter();
  newTransaction: ITransactionData;

  constructor(private http: HttpClient) {
    this.newTransaction = {
      dates: {
        valueDate: new Date().getTime(),
      },
      transaction: {
        amountCurrency: {
          amount: '',
        },
      },
      merchant: {
        name: '',
      },
    };
  }

  getAllTransactions(): Observable<ITransactionData[]> {
    return this.http.get<ITransactionData[]>(baseUrl + 'transactions.json');
  }

  addNewTransaction(formData): void {
    this.newTransaction.merchant.name = formData.get('to').value;
    this.newTransaction.transaction.amountCurrency.amount = formData.get(
      'amount'
    ).value;
    this.addTransaction.emit(this.newTransaction);
  }
}
