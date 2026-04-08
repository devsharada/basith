import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlider4Component } from './product-slider4.component';

describe('ProductSlider4Component', () => {
  let component: ProductSlider4Component;
  let fixture: ComponentFixture<ProductSlider4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlider4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlider4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
