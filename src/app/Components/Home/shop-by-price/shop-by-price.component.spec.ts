import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByPriceComponent } from './shop-by-price.component';

describe('ShopByPriceComponent', () => {
  let component: ShopByPriceComponent;
  let fixture: ComponentFixture<ShopByPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopByPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
