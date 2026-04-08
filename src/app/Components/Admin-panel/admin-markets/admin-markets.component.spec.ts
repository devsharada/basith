import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarketsComponent } from './admin-markets.component';

describe('AdminMarketsComponent', () => {
  let component: AdminMarketsComponent;
  let fixture: ComponentFixture<AdminMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMarketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
