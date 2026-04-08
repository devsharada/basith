import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacedDetailsComponent } from './order-placed-details.component';

describe('OrderPlacedDetailsComponent', () => {
  let component: OrderPlacedDetailsComponent;
  let fixture: ComponentFixture<OrderPlacedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPlacedDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPlacedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
