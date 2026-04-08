import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // router-outlet ke liye zaroori hai
import { AdminPanelSidebarComponent } from '../admin-panel-sidebar/admin-panel-sidebar.component'; // Sidebar ko import karein

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterModule, // Isko import karna zaroori hai
    AdminPanelSidebarComponent // Sidebar ko import karna zaroori hai
  ],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent { }