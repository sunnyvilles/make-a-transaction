import { NgModule } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { SortingService } from './sorting.service';

@NgModule({
  providers: [TransactionsService, SortingService],
})
export class ServicesModule {}
