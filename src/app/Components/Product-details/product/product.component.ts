import { Component } from '@angular/core';
import { ProductInfoComponent } from "../product-info/product-info.component";
import { ProductSlider3Component } from "../product-slider3/product-slider3.component";
import { ProductSlider4Component } from "../product-slider4/product-slider4.component";
import { ProductReviewComponent } from "../../Review/product-review/product-review.component";

@Component({
  selector: 'app-product',
  imports: [ProductInfoComponent, ProductSlider3Component, ProductSlider4Component, ProductReviewComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
