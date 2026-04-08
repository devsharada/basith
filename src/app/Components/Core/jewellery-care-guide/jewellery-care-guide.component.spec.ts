import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryCareGuideComponent } from './jewellery-care-guide.component';

describe('JewelleryCareGuideComponent', () => {
  let component: JewelleryCareGuideComponent;
  let fixture: ComponentFixture<JewelleryCareGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelleryCareGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryCareGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
