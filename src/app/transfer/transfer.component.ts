import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Validators } from '@angular/forms';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  text: string;
  #totalAmount: number;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private transactionsService: TransactionsService
  ) {
    this.#totalAmount = 5824.76;
  }

  ngOnInit(): void {
    this.initializeFormData();
  }
  initializeFormData(): void {
    this.transferForm = this.fb.group({
      from: {
        value: `Free checking(4692) - $${this.#totalAmount}`,
        disabled: true,
      },
      to: ['', Validators.required],
      amount: ['', Validators.required],
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

    dialogRef.afterClosed().subscribe((data) => {
      // inform the service to add new transaction
      if (data) {
        this.transactionsService.addNewTransaction(data);
        this.#totalAmount = this.calculateTotalAmount();
      }
      this.initializeFormData();
    });
  }

  calculateTotalAmount(): number {
    // change the total amount
    return this.#totalAmount - this.transferForm.get('amount').value;
  }

  totalAmountIsInvalid(): boolean {
    return (
      this.transferForm.get('amount').value < 0 ||
      this.calculateTotalAmount() < -500
    );
  }
}
