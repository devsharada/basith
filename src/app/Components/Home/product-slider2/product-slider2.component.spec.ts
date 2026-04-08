import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlider2Component } from './product-slider2.component';

describe('ProductSlider2Component', () => {
  let component: ProductSlider2Component;
  let fixture: ComponentFixture<ProductSlider2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlider2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
