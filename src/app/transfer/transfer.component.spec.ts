import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferComponent } from './transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionsService } from '../services/transactions.service';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;
  let service: TransactionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [FormsModule, ReactiveFormsModule, MatDialogModule],
    }).compileComponents();
    service = TestBed.inject(TransactionsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have total amount ', () => {
    expect(component['#totalAmount']).toEqual(5824.76);
  });
});
