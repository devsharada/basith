import { Component, OnInit } from '@angular/core'; // <-- ADD OnInit
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // <-- IMPORT Router

// Define interfaces for type safety (kept the existing ones)
interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: number;
  imagePath: string; // Placeholder for image
  name: string;
  category: string;
  price: string;
  summary: string;
  specs: ProductSpec[];
}

interface SummaryCard {
  title: string;
  amount: string;
  change: string;
  comparison: string;
  iconBgColor: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent implements OnInit { // <-- IMPLEMENT OnInit

  // Custom colors for inline Tailwind use
  darkBlue = '#032B76';
  lightBorder = '#C0CEF8';

  // --- VIEW STATE ---
  currentView: 'list' | 'grid' = 'grid'; // Default to grid view
  // ------------------

  constructor(private router: Router) {} // <-- INJECT Router

  ngOnInit(): void {
      // Determine the initial view based on the current URL
      const url = this.router.url;
      if (url.includes('product-list')) {
          this.currentView = 'list';
      } else if (url.includes('product-grid')) {
          this.currentView = 'grid';
      }
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
          // Navigate to the Product List route (As requested)
          this.router.navigate(['/admin/product-list']);
      }
  }

  // --- REST OF ORIGINAL DATA AND HELPERS ---
  summaryCards: SummaryCard[] = [
    {
      title: 'New products',
      amount: '₹126.500',
      change: '↑ 34.7%',
      comparison: 'Compared to Oct 2025',
      iconBgColor: 'bg-orange-500'
    },
    {
      title: 'Return Orders',
      amount: '₹126.500',
      change: '↑ 34.7%',
      comparison: 'Compared to Oct 2025',
      iconBgColor: 'bg-orange-500'
    }
  ];

  products: Product[] = [
    // ... (Your product data here)
    { id: 1, imagePath: 'https://i.pinimg.com/1200x/c6/06/7c/c6067cbb92dd6b81dc4a8f0db608df8f.jpg', name: 'Royal Spark Ring', category: 'Ring', price: '₹110.40', summary: 'A dazzling gold ring studded with fine diamonds, perfect for every occasion.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 2, imagePath: 'https://i.pinimg.com/1200x/12/59/75/125975a81c832f614509bb7854367a5d.jpg', name: 'Radiant Charm Bracelet', category: 'Bracelet', price: '₹110.40', summary: 'A stylish bracelet with intricate patterns that add glamour to your wrist.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 3, imagePath: 'https://i.pinimg.com/1200x/89/25/f4/8925f42bc3d41fa36a7e532b60ade5f9.jpg', name: 'Eternal Shine Pendent', category: 'Pendent', price: '₹110.40', summary: 'Elegant stud earrings designed with shimmering stones to elevate your style.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },

    { id: 4, imagePath: 'https://i.pinimg.com/736x/f0/c6/1d/f0c61d1d9bad6e9f9f53462e01cbc8c6.jpg', name: 'Royal Spark Chain Pendent', category: 'Pendant', price: '₹110.40', summary: 'Elegant stud earrings designed with shimmering stones to elevate your style.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 5, imagePath: 'https://i.pinimg.com/736x/1e/2a/17/1e2a17b4c5bab6212ab19169297371da.jpg', name: 'Eternal Shine Earrings', category: 'Earring', price: '₹110.40', summary: 'Timeless gold hoops crafted to match both traditional and modern looks.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 6, imagePath: 'https://i.pinimg.com/736x/ac/86/ca/ac86cac60dca77fd51ece3d4afa201f0.jpg', name: 'Royal Spark Ring', category: 'Ring', price: '₹110.40', summary: 'A dazzling gold ring studded with fine diamonds, perfect for every occasion.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },

    { id: 7, imagePath: 'https://i.pinimg.com/1200x/24/cc/8d/24cc8dc0e2cde363422ca509ce4ca4fd.jpg', name: 'Radiant Bracelet', category: 'Bracelet', price: '₹110.40', summary: 'A stylish bracelet with intricate patterns that add glamour to your wrist.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 8, imagePath: 'https://i.pinimg.com/736x/de/f7/1d/def71d0184d304085b6b6a64246643d3.jpg', name: 'Mystic Ruby Necklace', category: 'Necklace', price: '₹110.40', summary: 'A luxurious necklace adorned with rubies, bringing passion and elegance.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 9, imagePath: 'https://i.pinimg.com/736x/ce/9d/9e/ce9d9ef0731d31ad0f315ef3b59757c0.jpg', name: 'Twilight Necklace', category: 'Necklace', price: '₹110.40', summary: 'A luxurious necklace adorned with rubies, bringing passion and elegance.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },

    { id: 10, imagePath: 'https://i.pinimg.com/1200x/e9/05/f6/e905f6820e37979671864ab0e0572a32.jpg', name: 'Eternal Shine Earrings', category: 'Earrings', price: '₹110.40', summary: 'Timeless gold hoops crafted to match both traditional and modern looks.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 11, imagePath: 'https://i.pinimg.com/1200x/bb/57/65/bb57654ab478a2d2cbcf46d45deeaa28.jpg', name: 'Eternal Shine Pendent', category: 'Pendent', price: '₹110.40', summary: 'Elegant stud earrings designed with shimmering stones to elevate your style.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
    { id: 12, imagePath: 'https://i.pinimg.com/1200x/73/fd/c5/73fdc52b3d83fd4bbf3542f446531108.jpg', name: 'Radiant Charm Bracelet', category: 'Bangle', price: '₹110.40', summary: 'A stylish bracelet with intricate patterns that add glamour to your wrist.', specs: [{ label: 'Gross Wt', value: '2 gm' }, { label: 'Purity', value: '2 gm' }, { label: 'Quantity', value: '2 gm' }, { label: 'Crystal Wt', value: '2 gm' }, { label: 'SKU', value: '2 gm' }] },
  ];

  // For pagination
  pagination = [1, 2, 3, 4, '...', 10];
  currentPage = 1;

  // Placeholder function for image based on data
  getPlaceholderImageClass(name: string): string {
    return 'bg-gray-100 flex items-center justify-center h-full';
  }


  openAddProduct() {
    this.router.navigate(['/admin/add-product']); // ✅ this navigates to your Add Product page
  }
}
