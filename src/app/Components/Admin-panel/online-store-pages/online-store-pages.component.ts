import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- 1. Import FormsModule here

// Interface for the store page data structure
interface StorePage {
  id: number;
  title: string;
  visibility: 'Visible' | 'Active'; // 'Visible' is the blue badge, 'Active' is for the green one (Shipping & Return is 'Active')
  content: string;
  updated: string;
  selected: boolean;
}

@Component({
  selector: 'app-online-store-pages',
  // Mark as standalone for modern Angular applications
  standalone: true,
  // 2. Add FormsModule to the imports array
  imports: [CommonModule, FormsModule], // <-- ADDED FormsModule
  templateUrl: './online-store-pages.component.html',
  styleUrl: './online-store-pages.component.css'
})
export class OnlineStorePagesComponent {

  // Mock data for the table
  storePages: StorePage[] = [
    { id: 1, title: 'Wishlist', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: true },
    { id: 2, title: 'Services', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
    { id: 3, title: 'FAQs', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
    { id: 4, title: 'About Us', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
    { id: 5, title: 'Shipping & Return', visibility: 'Active', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
    { id: 6, title: 'Terms & Condition', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
    { id: 7, title: 'Return Policy', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
    { id: 8, title: 'Refund Policy', visibility: 'Visible', content: '-', updated: 'Oct 1 at 01:50 PM', selected: false },
  ];

  // Pagination state
  rowsPerPage: number = 8;
  currentPage: number = 1;
  totalPages: number = 10;
  totalRows: number = 100;

  // Selection logic
  get selectedCount(): number {
    return this.storePages.filter(p => p.selected).length;
  }

  toggleSelectAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.storePages.forEach(p => p.selected = isChecked);
  }

  isAllSelected(): boolean {
    // Also check if there are any pages to prevent false positive when table is empty
    return this.storePages.length > 0 && this.storePages.every(p => p.selected);
  }

  // Utility to get badge styles
  getVisibilityClass(visibility: StorePage['visibility']): string {
    return visibility === 'Visible'
      ? 'bg-032b76 text-white' // Dark Blue for Visible
      : 'bg-[#16A34A] text-white'; // Green for Active (as seen in image)
  }
}
