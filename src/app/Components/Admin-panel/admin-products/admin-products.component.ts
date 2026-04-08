import { Component, OnInit } from '@angular/core'; // Import OnInit
import { CommonModule } from '@angular/common'; // Required for *ngFor
import { Router } from '@angular/router'; // Import Router

// Define interfaces for type safety
interface ProductItem {
  sku: string;
  imagePath: string; // Placeholder for image
  name: string;
  category: string;
  stock: string;
  description: string;
  grossWt: string;
  purity: string;
  quality: string;
  isInitialSelected: boolean;
}

@Component({
    selector: 'app-admin-products',
    standalone: true, // Use standalone component
    imports: [CommonModule],
    templateUrl: './admin-products.component.html',
    // We are currently simulating the ProductListComponent which is the List View.
    // The router will handle switching to the grid view.
    styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit { // Implement OnInit

  // Custom colors for inline Tailwind use
  darkBlue = '#032B76';

  // State to track the current view (for button styling)
  currentView: 'list' | 'grid' = 'list'; // Default to list view as this component is currently ProductListComponent

  constructor(private router: Router) {} // Inject the Router

  ngOnInit(): void {
      // Determine the initial view based on the current URL
      const url = this.router.url;
      if (url.includes('product-grid')) {
          this.currentView = 'grid';
      } else if (url.includes('product-list')) {
          this.currentView = 'list';
      }
      // Note: If this component is ALWAYS ProductListComponent, you can skip this check.
      // However, if it's meant to be a wrapper around both views, this is correct.
  }

  // Method to handle the view change when an icon is clicked
  changeView(view: 'list' | 'grid'): void {
      if (this.currentView === view) {
          return; // Do nothing if already on this view
      }

      this.currentView = view;

      if (view === 'grid') {
          // Navigate to the Product Grid route
          this.router.navigate(['/admin/product-grid']);
      } else {
          // Navigate to the Product List route
          this.router.navigate(['/product-list']);
      }
  }


  // Data to populate the table (list view)
  products: ProductItem[] = [
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/dd/d5/ae/ddd5ae34d6f39f0d546f270dfd28088c.jpg', name: 'Royal Spark Ring', category: 'Ring', stock: '50 in stock for 3 variants.', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: true },
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/12/59/75/125975a81c832f614509bb7854367a5d.jpg', name: 'Radiant Charm Bracelet', category: 'Bracelet', stock: '14 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
    { sku: '647588', imagePath: 'https://i.pinimg.com/736x/95/83/33/958333b043fa6a41dea807a9ec7f0411.jpg', name: 'Eternal Shine Pendent', category: 'Pendent', stock: '3 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/ad/ed/34/aded34109fa84e70aa7def962a7ab8f1.jpg', name: 'Royal Spark', category: 'Pendent', stock: '19 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/e9/05/f6/e905f6820e37979671864ab0e0572a32.jpg', name: 'Eternal Shine Earrings', category: 'Earing', stock: '16 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/c3/f8/2c/c3f82ce01ef3897d849a232ebe272e0e.jpg', name: 'Royal Spark Ring', category: 'Ring', stock: '02 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/24/cc/8d/24cc8dc0e2cde363422ca509ce4ca4fd.jpg', name: 'Radiant Bracelet', category: 'Bracelet', stock: '05 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
    { sku: '647588', imagePath: 'https://i.pinimg.com/1200x/c6/9b/41/c69b41374c672aaacc70feeb8d9d08f9.jpg', name: 'Mystic Ruby Necklace', category: 'Necklace', stock: '08 in stock', description: 'A dazzling gold ring studded with ...', grossWt: '₹110.40', purity: '₹110.40', quality: '₹110.40', isInitialSelected: false },
  ];

  // Placeholder function for image simulation (since actual images aren't available)
  getPlaceholderImageClass(name: string): string {
    return 'bg-gray-100 flex items-center justify-center h-full w-full';
  }

  openAddProduct() {
    this.router.navigate(['/admin/add-product']); // ✅ this navigates to your Add Product page
  }


}
