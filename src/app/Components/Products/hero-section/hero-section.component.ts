import { Component } from '@angular/core';
import { AllProductsComponent } from "../all-products/all-products.component";

@Component({
  selector: 'app-hero-section',
  imports: [AllProductsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
