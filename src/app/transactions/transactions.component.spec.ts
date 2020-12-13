import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SortingService } from '../services/sorting.service';
import { TransactionsService } from '../services/transactions.service';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  const serviceStub = {
    getAllTransactions: () => [{ a: 2 }, { b: 3 }],
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: TransactionsService, useValue: serviceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
