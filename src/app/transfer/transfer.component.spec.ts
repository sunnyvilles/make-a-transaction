import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferComponent } from './transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionsService } from '../services/transactions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule,
      ],
      providers: [TransactionsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if total amount is valid', () => {
    component.transferForm.setValue({
      amount: 23,
      from: 'test',
      to: 'merchant',
    });
    expect(component.totalAmountIsInvalid()).toBeFalse();
  });
  it('should check if total amount is invalid', () => {
    component.transferForm.setValue({
      amount: 7000,
      from: 'test',
      to: 'merchant',
    });
    expect(component.totalAmountIsInvalid()).toBeTrue();
  });
});
