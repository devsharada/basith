import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor, *ngIf

// Placeholder interfaces for data structures
interface OrderItem {
  image: string;
  name: string;
  qty: number;
  date: string;
  revenue: string;
  netProfit: string;
  status: 'Pending' | 'Refund' | 'Shipping' | 'Completed';
}

interface Bestseller {
  image: string;
  name: string;
  price: string;
  sold: number;
  profit: string;
}


@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-analytics.component.html',
  styleUrl: './admin-analytics.component.css'
})
export class AdminAnalyticsComponent implements OnInit {

  // Placeholder data for Latest Orders
  latestOrders: OrderItem[] = [
    { image: 'https://i.pinimg.com/1200x/1a/57/70/1a5770aee6eb80ec6c35f09ff3819827.jpg', name: 'Mousselle Cascade Necklace', qty: 2, date: '5 Feb, 2020', revenue: '₹ 253.62', netProfit: '₹ 60.78', status: 'Pending' },
    { image: 'https://i.pinimg.com/736x/fb/2f/88/fb2f881f9d6c5bc39d0c177b3ca3a4ab.jpg', name: 'Aurora Halo Ring (Ring)', qty: 3, date: '5 Feb, 2020', revenue: '₹ 890.24', netProfit: '₹ 95.41', status: 'Shipping' },
    { image: 'https://i.pinimg.com/736x/67/c2/42/67c2422954fadc3634c7d02ee1ca8098.jpg', name: 'Aurora Halo Ring (Ring)', qty: 3, date: '5 Feb, 2020', revenue: '₹ 196.26', netProfit: '₹ 99.08', status: 'Refund' },
    { image: 'https://i.pinimg.com/1200x/eb/ba/06/ebba066f8541dd46ab45b929863c8cba.jpg', name: 'Aurora Halo Ring (Ring)', qty: 3, date: '9 Feb, 2020', revenue: '₹ 678.01', netProfit: '₹ 84.88', status: 'Completed' },
    { image: 'https://i.pinimg.com/736x/22/dd/40/22dd4044bb6cf58a974afd3c79cc2953.jpg', name: 'Aurora Halo Ring (Ring)', qty: 2, date: '5 Feb, 2020', revenue: '₹ 919.71', netProfit: '₹ 40.52', status: 'Shipping' },
    { image: 'https://i.pinimg.com/736x/67/c2/42/67c2422954fadc3634c7d02ee1ca8098.jpg', name: 'Aurora Halo Ring (Ring)', qty: 4, date: '5 Feb, 2020', revenue: '₹ 897.90', netProfit: '₹ 81.04', status: 'Completed' },
    { image: 'https://i.pinimg.com/736x/82/99/b1/8299b1b0389a0d61659418124774f99d.jpg', name: 'Aurora Halo Ring (Ring)', qty: 3, date: '9 Feb, 2020', revenue: '₹ 583.43', netProfit: '₹ (1.48)', status: 'Pending' },
    { image: 'https://i.pinimg.com/736x/fb/2f/88/fb2f881f9d6c5bc39d0c177b3ca3a4ab.jpg', name: 'Aurora Halo Ring (Ring)', qty: 4, date: '5 Feb, 2020', revenue: '₹ 583.96', netProfit: '₹ 43.08', status: 'Refund' },
    { image: 'https://i.pinimg.com/736x/22/dd/40/22dd4044bb6cf58a974afd3c79cc2953.jpg', name: 'Aurora Halo Ring (Ring)', qty: 2, date: '9 Feb, 2020', revenue: '₹ 192.16', netProfit: '₹ 80.63', status: 'Completed' },
    { image: 'https://i.pinimg.com/736x/67/c2/42/67c2422954fadc3634c7d02ee1ca8098.jpg', name: 'Aurora Halo Ring (Ring)', qty: 4, date: '5 Feb, 2020', revenue: '₹ 279.04', netProfit: '₹ 49.08', status: 'Completed' },
  ];

  // Placeholder data for Bestsellers
  bestsellers: Bestseller[] = [
    { image: 'https://i.pinimg.com/736x/82/99/b1/8299b1b0389a0d61659418124774f99d.jpg', name: 'Aurora Halo Ring (Ring)', price: '₹ 253.00', sold: 409, profit: '₹ 3790.71' },
    { image: 'https://i.pinimg.com/736x/22/dd/40/22dd4044bb6cf58a974afd3c79cc2953.jpg', name: 'Aurora Halo Ring (Ring)', price: '₹ 588.24', sold: 396, profit: '₹ 5890.71' },
    { image: 'https://i.pinimg.com/1200x/eb/ba/06/ebba066f8541dd46ab45b929863c8cba.jpg', name: 'Aurora Halo Ring (Ring)', price: '₹ 678.01', sold: 343, profit: '₹ 4440.71' },
    { image: 'https://i.pinimg.com/736x/67/c2/42/67c2422954fadc3634c7d02ee1ca8098.jpg', name: 'Aurora Halo Ring (Ring)', price: '₹ 919.71', sold: 536, profit: '₹ 2290.71' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Function to get classes for order status
  getStatusClasses(status: OrderItem['status']): string {
    switch (status) {
      case 'Pending':
        return 'text-[#FF9608] bg-[#FFF2E0]';
      case 'Refund':
        return 'text-[#E43232] bg-[#FAE3E3]';
      case 'Shipping':
        return 'text-[#4A92FA] bg-[#EAF2FE]';
      case 'Completed':
        return 'text-[#25C470] bg-[#E7F7EF]';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  }
}