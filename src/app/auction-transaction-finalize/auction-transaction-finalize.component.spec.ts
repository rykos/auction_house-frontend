import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionTransactionFinalizeComponent } from './auction-transaction-finalize.component';

describe('AuctionTransactionFinalizeComponent', () => {
  let component: AuctionTransactionFinalizeComponent;
  let fixture: ComponentFixture<AuctionTransactionFinalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionTransactionFinalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionTransactionFinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
