import { Component,} from '@angular/core';
import { HeroSliderComponent } from '../hero-slider/hero-slider.component';
import { CategoryComponent } from "../category/category.component";
import { ShopByPriceComponent } from "../shop-by-price/shop-by-price.component";
import { CollectionComponent } from "../collection/collection.component";
import { ShopNowComponent } from "../shop-now/shop-now.component";
import { FindStoreComponent } from "../find-store/find-store.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { GiftingComponent } from "../gifting/gifting.component";
import { ProductSlider1Component } from "../product-slider1/product-slider1.component";
import { ProductSlider2Component } from "../product-slider2/product-slider2.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";

@Component({
  selector: 'app-home',
  imports: [HeroSliderComponent, CategoryComponent, ShopByPriceComponent, CollectionComponent, ShopNowComponent, FindStoreComponent, TestimonialComponent, GiftingComponent, ProductSlider1Component, ProductSlider2Component, ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
