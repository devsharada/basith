import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  link: string;
  alt: string;
}

@Component({
  selector: 'app-user-wishlist',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './user-wishlist.component.html',
  styleUrl: './user-wishlist.component.css',
   animations: [
    trigger('fadeAnimation', [
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
    ]),
  ],
})
export class UserWishlistComponent {
 products1: Product[] = [
    {
      id: 1,
      name: 'Pure Gold Ring',
      price: '₹ 49,999',
      image: '/assets/images/product/product1.png',
      alt: 'Earring',
      link: '/product-details',
    },
    {
      id: 2,
      name: 'Beautiful Gold Necklace',
      price: '₹ 49,999',
      image: '/assets/images/product/product2.png',
      alt: 'Bracelet',
      link: '/product-details',
    },
    {
      id: 3,
      name: 'Gold Earrings',
      price: '₹ 49,999',
      image: '/assets/images/product/product3.png',
      alt: 'Ring',
      link: '/product-details',
    },
    {
      id: 4,
      name: 'Gold Pendant Set',
      price: '₹ 49,999',
      image: '/assets/images/product/product4.png',
      alt: 'Diamond',
      link: '/product-details',
    },
    {
      id: 5,
      name: 'Gold Bangles',
      price: '₹ 49,999',
      image: '/assets/images/product/product5.png',
      alt: 'Anklet',
      link: '/product-details',
    },
    {
      id: 6,
      name: 'Gold Earrings',
      price: '₹ 49,999',
      image: '/assets/images/product/product3.png',
      alt: 'Ring',
      link: '/product-details',
    },
  ];

  // Remove item from wishlist
  removeItem(id: number) {
    this.products1 = this.products1.filter((item) => item.id !== id);
  }
}
