import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlider1Component } from './product-slider1.component';

describe('ProductSlider1Component', () => {
  let component: ProductSlider1Component;
  let fixture: ComponentFixture<ProductSlider1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlider1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
