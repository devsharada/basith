import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingSizeGuideComponent } from './ring-size-guide.component';

describe('RingSizeGuideComponent', () => {
  let component: RingSizeGuideComponent;
  let fixture: ComponentFixture<RingSizeGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RingSizeGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingSizeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
