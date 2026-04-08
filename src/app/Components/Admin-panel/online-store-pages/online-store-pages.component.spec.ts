import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStorePagesComponent } from './online-store-pages.component';

describe('OnlineStorePagesComponent', () => {
  let component: OnlineStorePagesComponent;
  let fixture: ComponentFixture<OnlineStorePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineStorePagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineStorePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
