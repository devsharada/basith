import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangleSizeGuideComponent } from './bangle-size-guide.component';

describe('BangleSizeGuideComponent', () => {
  let component: BangleSizeGuideComponent;
  let fixture: ComponentFixture<BangleSizeGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BangleSizeGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangleSizeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
