import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Validators } from '@angular/forms';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  totalAmount: number;
  text: string;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private transactionsService: TransactionsService
  ) {
    this.totalAmount = 5824.76;
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.transferForm = this.fb.group({
      from: `Free checking(4692) - $${this.totalAmount}`,
      to: ['', Validators.required],
      amount: [0, Validators.required],
    });
  }

  onSubmitTransfer(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      autoFocus: true,
      width: '60%',
      data: this.transferForm.value,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onClose();
    });
  }

  onClose(): void {
    //change the total amount
    const amount = this.transferForm.get('amount').value;
    this.totalAmount -= amount;

    //inform the service to add new transaction
    this.transactionsService.addNewTransaction(this.transferForm);
    this.transferForm.reset();
  }
}
