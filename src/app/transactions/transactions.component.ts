import { Component, OnInit, Input } from '@angular/core';
import { ITransactionData } from '../shared/transaction-data';
import { TransactionsService } from '../services/transactions.service';
import { SortingService } from '../services/sorting.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public filter: string;
  filteredTransactions: any[] = [];
  customersOrderTotal: number;
  currencyCode = 'USD';
  allTransactions: ITransactionData[] = [];

  @Input() get transactions(): ITransactionData[] {
    return this.allTransactions;
  }

  set transactions(value: ITransactionData[]) {
    if (value) {
      this.filteredTransactions = this.allTransactions = value;
      this.calculateOrders();
    }
  }

  constructor(
    private transactionService: TransactionsService,
    private sortingService: SortingService
  ) {}

  ngOnInit(): void {
    this.transactionService
      .getAllTransactions()
      .subscribe(
        (transactions: ITransactionData[]) =>
          (this.allTransactions = this.filteredTransactions = transactions)
      );

    this.transactionService.addTransaction.subscribe((newTransaction) =>
      this.allTransactions.push(newTransaction)
    );
  }

  calculateOrders(): void {
    // this.customersOrderTotal = 0;
    this.filteredTransactions.forEach((cust: ITransactionData) => {
      // this.customersOrderTotal += cust.orderTotal;
    });
  }

  applyFilter(data: string): void {
    if (data) {
      this.filteredTransactions = this.allTransactions.filter(
        (transaction: ITransactionData) => {
          return transaction.merchant.name.toLowerCase().indexOf(data) > -1;
        }
      );
    } else {
      this.filteredTransactions = this.allTransactions;
    }
  }

  sortBy(key: string): void {
    this.filteredTransactions = this.sortingService.sortBy(
      this.filteredTransactions,
      key
    );
  }
}
