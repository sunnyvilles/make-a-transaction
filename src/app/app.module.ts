import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ConfirmationDialogComponent } from './transfer/confirmation-dialog/confirmation-dialog.component';

import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    TransactionsComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    ServicesModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
