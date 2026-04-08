import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-shop-by-price',
  imports: [NgFor, RouterLink],
  templateUrl: './shop-by-price.component.html',
  styleUrl: './shop-by-price.component.css'
})
export class ShopByPriceComponent {

   prices = [
    { name: 'Under ₹ 9999', image: '/assets/images/price/price1.png', alt: 'Earring', link: '#' },
    { name: 'Under ₹ 14999', image: '/assets/images/price/price2.png', alt: 'Bracelet', link: '#' },
    { name: 'Under ₹ 29999', image: '/assets/images/price/price3.png', alt: 'Ring', link: '#' },
    { name: 'Under ₹ 39999', image: '/assets/images/price/price4.png', alt: 'Diamond', link: '#' },
  ];

}
