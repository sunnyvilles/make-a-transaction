import { Injectable } from '@angular/core';
import { ITransactionData } from '../shared/transaction-data';

@Injectable()
export class SortingService {
  direction = 1;
  sortBy(transactions: any[], key: any): ITransactionData[] {
    const result: ITransactionData[] = transactions.sort((obj1, obj2) => {
      // temeprarily sorting on merchant
      const key1 = obj1.merchant.name.toLowerCase();
      const key2 = obj2.merchant.name.toLowerCase();

      if (key1 > key2) {
        return this.direction * 1;
      }
      if (key1 < key2) {
        return this.direction * -1;
      }
      return 0;
    });
    this.direction *= -1;
    return result;
  }
}
