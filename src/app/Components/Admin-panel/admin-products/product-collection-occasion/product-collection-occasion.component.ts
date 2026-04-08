import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define interfaces for type safety
interface TableRow {
  isChecked: boolean;
  title: string;
  count: number | string;
  productCondition: string;
  isSelectable: boolean; // Flag if this row is a selection option (Collection/Occasion)
}

@Component({
  selector: 'app-product-collection-occasion',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './product-collection-occasion.component.html',
  styleUrl: './product-collection-occasion.component.css'
})
export class ProductCollectionOccasionComponent implements OnInit {
  
  neoPrimary = 'var(--neoPrimary)'; 
  
  // State variables
  activeTab: 'all' | 'collection' | 'occasion' = 'all'; 
  
  // Array of items currently displayed in the table.
  displayData: TableRow[] = []; 

  // --- SOURCE DATA ---

  // 1. Mock data for the 'All' table view (Full Products/Collections)
  allTableData: TableRow[] = [
     { isChecked: true, title: 'New Arrivals', count: 50, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Trending Product', count: 54, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Antique', count: 20, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Divine', count: 11, productCondition: '..', isSelectable: true },
    // Add a few more blank rows to match the visual length of the image
    { isChecked: false, title: '-', count: '', productCondition: '..', isSelectable: true },
     { isChecked: false, title: 'Diwali', count: 8, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Birthday', count: 12, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Wedding', count: 35, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Office Wear', count: 22, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Festive', count: 18, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Party', count: 40, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Casual', count: 6, productCondition: '..', isSelectable: true },
  ];

  // 2. Data for the 'Collection' tab options (from image)
  collections: TableRow[] = [
    { isChecked: true, title: 'New Arrivals', count: 50, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Trending Product', count: 54, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Antique', count: 20, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Divine', count: 11, productCondition: '..', isSelectable: true },
    // Add a few more blank rows to match the visual length of the image
    { isChecked: false, title: '-', count: '', productCondition: '..', isSelectable: true },
  ];

  // 3. Data for the 'Occasion' tab options (from image)
  occasions: TableRow[] = [
    { isChecked: true, title: 'Diwali', count: 8, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Birthday', count: 12, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Wedding', count: 35, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Office Wear', count: 22, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Festive', count: 18, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Party', count: 40, productCondition: '..', isSelectable: true },
    { isChecked: false, title: 'Casual', count: 6, productCondition: '..', isSelectable: true },
    // Add more occasions as simple mock data rows to fill the view
  ];
  
  // Mock data for pagination
  totalRowsSelected = 1;
  totalRows = 100;
  
  ngOnInit(): void {
      this.getDisplayData(); // Initial load
  }

  // Helper to determine which data to display
  getDisplayData(): void {
    if (this.activeTab === 'collection') {
        this.displayData = this.collections;
    } else if (this.activeTab === 'occasion') {
        this.displayData = this.occasions;
    } else {
        this.displayData = this.allTableData;
    }
  }

  // Event handler for tab clicks
  changeTab(tab: 'all' | 'collection' | 'occasion'): void {
    this.activeTab = tab;
    this.getDisplayData();
  }

  // Handles checkbox/selection in the table
  toggleSelection(row: TableRow): void {
      if (this.activeTab === 'collection' || this.activeTab === 'occasion') {
          // If it's a selection tab, treat it like a radio button: only one can be checked
          this.displayData.forEach(r => r.isChecked = false);
          row.isChecked = true;
          this.totalRowsSelected = 1; 
      } else {
          // For 'All' tab, allow multiple selections
          row.isChecked = !row.isChecked;
          this.totalRowsSelected = this.displayData.filter(r => r.isChecked).length;
      }
      console.log('Row Toggled:', row.title);
  }
}