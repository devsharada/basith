import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  link: string;
}

@Component({
  selector: 'app-user-cart',
  imports: [DecimalPipe, RouterLink, NgFor, NgIf],
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.css',
})
export class UserCartComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Promise Gold Ring',
      image: '/assets/images/product/product1.png',
      price: 520,
      quantity: 1,
      link: '/product_details',
    },
    {
      id: 2,
      name: 'Promise Gold Ring',
      image: '/assets/images/product/product1.png',
      price: 520,
      quantity: 1,
      link: '/product_details',
    },
  ];

  //  quantity control
  increaseQty(item: CartItem) {
    item.quantity++;
  }

  decreaseQty(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  // for single product price according to qty
  getItemTotal(item: CartItem): number {
    return item.price * item.quantity;
  }

  // all product price
  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + this.getItemTotal(item),
      0
    );
  }

  // for shiipping & tax
  shippingCharge = 100; // or dynamic from API
  tax = 0;

  // for total price including shipping & tax
  getFinalTotal(): number {
    return this.getCartTotal() + this.shippingCharge + this.tax;
  }

  // remove product from cart
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // for go to checkout
  constructor(private router: Router) {}

  goToCheckout() {
    this.router.navigate(['/checkout']); // make sure /checkout route exists
  }
}
