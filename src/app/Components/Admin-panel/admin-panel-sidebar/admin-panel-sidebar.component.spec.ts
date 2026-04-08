import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSidebarComponent } from './admin-panel-sidebar.component';
import { provideRouter } from '@angular/router';

describe('AdminPanelSidebarComponent', () => {
  let component: AdminPanelSidebarComponent;
  let fixture: ComponentFixture<AdminPanelSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPanelSidebarComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
