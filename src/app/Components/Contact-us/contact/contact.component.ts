import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../Core/breadcrumb/breadcrumb.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name = '';
  email = '';
  phone = '';
  message = '';

  submitForm() {
    console.log({
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
    alert('Form submitted!');
  }

}
