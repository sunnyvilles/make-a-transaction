import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ITransactionData } from '../shared/transaction-data';

const baseUrl = 'assets/';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  @Output()
  addTransaction: EventEmitter<ITransactionData> = new EventEmitter();
  newTransaction: ITransactionData;

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<ITransactionData[]> {
    return this.http
      .get<ITransactionData[]>(baseUrl + 'transactions.json')
      .pipe(retry(1), catchError(this.onError));
  }

  onError(err: any): Observable<any> {
    const message = 'error while getting list of transactions: ' + err.status;
    return throwError(message);
  }

  addNewTransaction(formData): void {
    this.newTransaction = this.getNewDataInstance();
    this.newTransaction.merchant.name = formData.to;
    this.newTransaction.transaction.amountCurrency.amount = formData.amount;
    this.addTransaction.emit(this.newTransaction);
  }

  getNewDataInstance(): ITransactionData {
    return {
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
}
