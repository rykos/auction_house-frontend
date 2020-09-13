import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionBarComponent } from './auction-bar.component';

describe('AuctionBarComponent', () => {
  let component: AuctionBarComponent;
  let fixture: ComponentFixture<AuctionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
