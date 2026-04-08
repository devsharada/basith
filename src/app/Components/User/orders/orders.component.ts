import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TrackOrderComponent } from '../track-order/track-order.component';

interface Product {
  name: string;
  size: string;
  metal: string;
  imageUrl: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor, TrackOrderComponent, NgIf],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  products: Product[] = [
    {
      name: 'Tone Diamond Ring',
      size: '6',
      metal: 'Gold',
      imageUrl: 'https://i.pinimg.com/736x/ab/60/ba/ab60ba19943b20108bc7cc4ed73e9366.jpg'
    },
    {
      name: 'Elegant Pearl Necklace',
      size: 'One Size',
      metal: 'Pearl',
      imageUrl: 'https://i.pinimg.com/736x/3f/d7/5e/3fd75e975707450f16a15340c4e01808.jpg'
    }
  ];

  orderNumber: string = '#2687283798';
  pay: string = '₹ 93,446';
  paymentMethod: string = 'COD';
  status: string = 'Out for delivery';

  // Toggle for showing TrackOrder component
  showTrackOrder: boolean = false;

  // Method to toggle
  toggleTrackOrder() {
    this.showTrackOrder = !this.showTrackOrder;
  }
}
