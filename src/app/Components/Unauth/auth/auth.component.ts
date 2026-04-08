import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
   @Input() show = false;
  @Output() close = new EventEmitter<void>();

  closeLogin() {
    this.close.emit();
  }
}
