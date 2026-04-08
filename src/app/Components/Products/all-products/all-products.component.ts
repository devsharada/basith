import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { BreadcrumbComponent } from "../../Core/breadcrumb/breadcrumb.component";

export interface FilterOption {
  label: string;
  value: string;
  checked?: boolean;
}

export interface FilterSection {
  title: string;
  type: 'checkbox' | 'range';
  options?: FilterOption[];
  minValue: number; // optional
  maxValue: number; // optional
  minLimit?: number;
  maxLimit?: number;
}

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf, NgClass, FormsModule, FilterComponent, BreadcrumbComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  showFilters = false;

  products = [
    { name: 'Pure Gold Ring', price: '₹ 49,999', image: '/assets/images/product/product1.png', alt: 'Earring', link: '/product-details' },
    { name: 'Beautiful Gold Necklace', price: '₹ 49,999', image: '/assets/images/product/product2.png', alt: 'Bracelet', link: '/product-details' },
    { name: 'Gold Earrings', price: '₹ 49,999', image: '/assets/images/product/product3.png', alt: 'Ring', link: '/product-details' },
    { name: 'Gold Pendant Set', price: '₹ 49,999', image: '/assets/images/product/product4.png', alt: 'Diamond', link: '/product-details' },
    { name: 'Gold Bangles', price: '₹ 49,999', image: '/assets/images/product/product5.png', alt: 'Anklet', link: '/product-details' },
    { name: 'Gold Earrings', price: '₹ 49,999', image: '/assets/images/product/product3.png', alt: 'Ring', link: '/product-details' },
  ];

  filteredProducts = [...this.products]; // copy all products initially

  // Filters data
  filters: FilterSection[] = [
    {
      title: 'Shop By',
      type: 'checkbox',
      options: [
        { label: 'Bestseller', value: 'bestseller' },
        { label: 'New Arrivals', value: 'new' },
        { label: 'Trending', value: 'trending' },
        { label: 'Occasion', value: 'occasion' },
        { label: 'Gifting', value: 'gifting' },
      ],
      minValue: 0, // dummy for type consistency
      maxValue: 0,
    },
    {
      title: 'Category',
      type: 'checkbox',
      options: [
        { label: 'Ring', value: 'ring' },
        { label: 'Earring', value: 'earring' },
        { label: 'Pendant', value: 'pendant' },
        { label: 'Necklace', value: 'necklace' },
        { label: 'Anklet', value: 'anklet' },
        { label: 'Bracelet', value: 'bracelet' },
      ],
      minValue: 0, // dummy for type consistency
      maxValue: 0,
    },
    {
      title: 'Metal',
      type: 'checkbox',
      options: [
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' },
      ],
      minValue: 0, // dummy for type consistency
      maxValue: 0,
    },
    {
      title: 'Shop For',
      type: 'checkbox',
      options: [
        { label: 'Women', value: 'women' },
        { label: 'Men', value: 'men' },
        { label: 'Unisex', value: 'unisex' },
        { label: 'Kids', value: 'kids' },
      ],
      minValue: 0, // dummy for type consistency
      maxValue: 0,
    },
    {
      title: 'Discount',
      type: 'checkbox',
      options: [
        { label: 'Above 10%', value: '10' },
        { label: 'Above 20%', value: '20' },
        { label: 'Above 30%', value: '30' },
        { label: 'Above 40%', value: '40' },
      ],
      minValue: 0, // dummy for type consistency
      maxValue: 0,
    },
    {
      title: 'Size',
      type: 'checkbox',
      options: [
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
      ],
      minValue: 0, // dummy for type consistency
      maxValue: 0,
    },
    {
      title: 'Price',
      type: 'range',
      minValue: 10000,
      maxValue: 50000,
      minLimit: 0,
      maxLimit: 100000,
    },
  ];

  constructor(private cdr: ChangeDetectorRef)  {
    this.filteredProducts = [...this.products];
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
    document.body.style.overflow = this.showFilters ? 'hidden' : 'auto';
  }

  closeFilters() {
    this.showFilters = false;
    document.body.style.overflow = 'auto';
  }

  onFilterApply(selectedFilters: any) {
    this.filteredProducts = this.products.filter((product) => {
      let matches = true;

      //  Filter by Category
      if (selectedFilters['Category']?.length) {
        const categories = selectedFilters['Category'];
        matches =
          matches &&
          categories.some((cat: string) =>
            product.name.toLowerCase().includes(cat)
          );
      }

      //  Filter by Metal
      if (selectedFilters['Metal']?.length) {
        const metals = selectedFilters['Metal'];
        matches =
          matches &&
          metals.some((metal: string) =>
            product.name.toLowerCase().includes(metal)
          );
      }

      //  Filter by Price (convert ₹ 2,00,000 to 200000)
      if (selectedFilters['Price']) {
        const price = +product.price.replace(/[^\d]/g, '');
        const min = selectedFilters['Price'].min;
        const max = selectedFilters['Price'].max;
        matches = matches && price >= min && price <= max;
      }

      return matches;
    });

    this.closeFilters();
  }

  openSections: Record<string, boolean> = {};
  toggleSection(title: string) {
    this.openSections[title] = !this.openSections[title];
  }

  selectedChips: { section: string; value: string; label: string }[] = [];

onFilterChanged(change: any) {
  const { section, value, label, checked } = change;

  if (checked) {
    const exists = this.selectedChips.some(
      (chip) => chip.section === section && chip.value === value
    );
    if (!exists) {
      this.selectedChips.push({ section, value, label });
    }
  } else {
    this.selectedChips = this.selectedChips.filter(
      (chip) => !(chip.section === section && chip.value === value)
    );
  }

  this.cdr.detectChanges(); // <--- force change detection
}


  removeChip(chipToRemove: { section: string; value: string; label: string }) {
    // Uncheck from filters
    this.filters.forEach((section) => {
      if (section.title === chipToRemove.section && section.options) {
        section.options.forEach((opt) => {
          if (opt.value === chipToRemove.value) opt.checked = false;
        });
      }
    });

    // Remove from selected chips
    this.selectedChips = this.selectedChips.filter(
      (chip) =>
        !(
          chip.section === chipToRemove.section &&
          chip.value === chipToRemove.value
        )
    );
  }

  clearAllChips() {
    this.filters.forEach((section) => {
      if (section.type === 'checkbox' && section.options) {
        section.options.forEach((opt) => (opt.checked = false));
      } else if (section.type === 'range') {
        section.minValue = section.minLimit || 0;
        section.maxValue = section.maxLimit || 100000;
      }
    });

    this.selectedChips = [];
    this.filteredProducts = [...this.products]; // show all products again
  }

  sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Newest', value: 'new' },
  { label: 'Price: Low to High', value: 'priceLowHigh' },
  { label: 'Price: High to Low', value: 'priceHighLow' },
  { label: 'Popularity', value: 'popularity' },
];

selectedLabel = 'Featured';
selectedSort = 'featured';
open = false;

selectSort(opt: any) {
  this.selectedLabel = opt.label;
  this.selectedSort = opt.value;
  this.open = false;
}

}
