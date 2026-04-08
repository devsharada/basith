import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollectionOccasionComponent } from './product-collection-occasion.component';

describe('ProductCollectionOccasionComponent', () => {
  let component: ProductCollectionOccasionComponent;
  let fixture: ComponentFixture<ProductCollectionOccasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCollectionOccasionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCollectionOccasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
