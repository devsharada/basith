import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngFor, *ngIf

// Interfaces for component data
interface KpiCard {
  title: string;
  value: string;
  // Removed iconPath
  trendPercentage: string;
  comparison: string;
}

interface Order {
  productName: string;
  orderId: string;
  date: string;
  customerName: string;
  status: 'Delivered' | 'Canceled' | 'Pending';
  amount: string;
}

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule], // Add CommonModule for Angular directives
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {

  // Data for the KPI Cards - Updated to match the image titles and values
  kpis: KpiCard[] = [
    {
      title: 'New Orders',
      value: '6.244k',
      trendPercentage: '34.7%',
      comparison: 'Compared to Oct 2025'
    },
    {
      title: 'Delivered Orders',
      value: '10k',
      trendPercentage: '34.7%',
      comparison: 'Compared to Oct 2025'
    },
    {
      title: 'Pending Orders',
      value: '1k',
      trendPercentage: '34.7%',
      comparison: 'Compared to Oct 2025'
    },
    {
      title: 'Return Orders',
      value: '250',
      trendPercentage: '34.7%',
      comparison: 'Compared to Oct 2025'
    },
  ];

  // Data for the Recent Orders table
  recentOrders: Order[] = [
    { productName: 'Radiant Charm Bracelet', orderId: '#25426', date: '07 Nov 2025', customerName: 'Kavin', status: 'Delivered', amount: '₹200.00' },
    { productName: 'Eternal Shine Pendent', orderId: '#25425', date: '07 Nov 2025', customerName: 'Komael', status: 'Canceled', amount: '₹200.00' },
    { productName: 'Royal Spark', orderId: '#25424', date: '07 Nov 2025', customerName: 'Nikhil', status: 'Pending', amount: '₹200.00' },
    { productName: 'Eternal Shine Earrings', orderId: '#25423', date: '07 Nov 2025', customerName: 'Shivam', status: 'Canceled', amount: '₹200.00' },
    { productName: 'Radiant Bracelet', orderId: '#25422', date: '07 Nov 2025', customerName: 'Shadab', status: 'Delivered', amount: '₹200.00' },
    { productName: 'Mystic Ruby Necklace', orderId: '#25421', date: '07 Nov 2025', customerName: 'Yogesh', status: 'Delivered', amount: '₹200.00' }
  ];

  /**
   * Returns the Tailwind CSS class for the status dot color based on the order status.
   */
  getStatusDotColor(status: Order['status']): string {
    switch (status) {
      case 'Delivered':
        return 'bg-[#407BFF]'; // Blue dot for delivered (Hex approx. to image)
      case 'Canceled':
        return 'bg-[#DC2626]'; // Red dot for canceled
      case 'Pending':
        return 'bg-[#16A34A]'; // Green dot for pending
      default:
        return 'bg-gray-500';
    }
  }

  /**
   * Generates a stable placeholder avatar URL for visual consistency.
   */
  getCustomerAvatarUrl(customerName: string): string {
    const seed = customerName.charAt(0).toLowerCase();
    // Using a placeholder service (pravatar) for dummy images
    return `https://i.pravatar.cc/150?u=${seed}`;
  }
}