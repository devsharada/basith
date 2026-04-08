import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Needed for [(ngModel)]

// Data structure for a single row in the tracking table
interface TrackingRow {
  id: string;
  date: string;
  time: string;
  status: 'Pending' | 'Active' | 'In progress' | 'Cancelled' | 'Draft' | 'Archived';
  deliveredTo: string;
  trackingNo: string;
  placement: string;
  total: string;
  direct: string;
  selected: boolean;
}

@Component({
  selector: 'app-product-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-tracking.component.html',
  styleUrl: './product-tracking.component.css'
})
export class ProductTrackingComponent implements OnInit {
  
  // Example data for the table
  trackingData: TrackingRow[] = [
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'Pending', deliveredTo: 'No. 5B, Sunrise Apt\n,Bengaluru, Karnataka 560076', trackingNo: '--', placement: 'Cash on Delivery\n(COD)', total: '₹ 10,000', direct: 'Direct', selected: true },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'Pending', deliveredTo: '12A, Rose Villa,\nLokhandwala Link Road, Andheri West', trackingNo: '--', placement: 'Cash on Delivery\n(COD)', total: '₹ 10,000', direct: 'Direct', selected: false },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'Active', deliveredTo: 'House No. 22,\nGreenfields Colony, Sector 14, Noida', trackingNo: '63738838', placement: 'Paid Via\nWallets', total: '₹ 10,000', direct: 'Direct', selected: false },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'Active', deliveredTo: '4th Floor, Moonlight\nTowers, Anna Salai, T. Nagar, Chennai', trackingNo: '63738838', placement: 'Paid Via\nGoogle Pay', total: '₹ 10,000', direct: 'Direct', selected: false },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'Pending', deliveredTo: 'Shop No. 7, Laxmi\nPlaza, Park Street, Kolkata, West Bengal', trackingNo: '--', placement: 'Cash on Delivery\n(COD)', total: '₹ 10,000', direct: 'Direct', selected: false },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'In progress', deliveredTo: 'H.No. 8, Olive\nResidency, Jaipur,\nRajasthan 302001', trackingNo: '--', placement: 'Paid Via\nWallets', total: '₹ 10,000', direct: 'Direct', selected: false },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'In progress', deliveredTo: 'Bungalow 3, Coconut\nGrove, Varkala Beach\nRoad', trackingNo: '63738838', placement: 'Cash on Delivery\n(COD)', total: '₹ 10,000', direct: 'Direct', selected: false },
    { id: '#324-325', date: '28-03-2024', time: '16:09:32', status: 'Cancelled', deliveredTo: 'Himalayan Heights,\nShimla, Himachal\nPradesh 171001', trackingNo: '--', placement: 'Paid Via\nGoogle Pay', total: '₹ 10,000', direct: 'Direct', selected: false },
  ];

  selectedFilter: 'All' | 'Active' | 'Draft' | 'Archived' = 'All';

  constructor() {}

  ngOnInit(): void {}

  // Function to handle status pill styling using specific color codes
  getStatusClasses(status: TrackingRow['status']): string {
    switch (status) {
      case 'Pending':
        // Background: #FF9608 (full opacity) | Text: White (as seen in image)
        return 'bg-[#FF9608] text-white'; 
      case 'Active':
        // Background: #032B76 (full opacity) | Text: White
        return 'bg-[#032B76] text-white'; 
      case 'In progress':
        // Background: #4A92FA (full opacity) | Text: White (as seen in image)
        return 'bg-[#4A92FA] text-white'; 
      case 'Cancelled':
        // Background: Light red/pinkish (calculated from image) | Text: #E43232
        // NOTE: The background is lighter than the text color in the image, so I'm using a light red BG
        return 'bg-[#FAE3E3] text-[#E43232]'; 
      default:
        // Default style for others
        return 'bg-gray-200 text-gray-700';
    }
  }

  // Function to handle checkbox selection
  toggleSelectAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.trackingData.forEach(row => row.selected = isChecked);
  }

  // Function to get the dot color for status pills
  getDotClasses(status: TrackingRow['status']): string {
    switch (status) {
      case 'Active':
        return 'bg-white'; // White dot for Active
      case 'In progress':
        return 'bg-white'; // White dot for In progress
      case 'Cancelled':
        return 'bg-[#E43232]'; // Red dot for Cancelled
      default:
        return 'hidden'; // No dot for others like Pending
    }
  }
}