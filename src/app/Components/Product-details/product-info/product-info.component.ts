import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from "../../Core/breadcrumb/breadcrumb.component";

interface Specification {
  label: string;
  value: string;
}

@Component({
  selector: 'app-product-info',
  imports: [NgClass, NgIf, NgFor, RouterLink, BreadcrumbComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
 // Main product images
  mainImage = '/assets/images/product/product-1.png';
  thumbnails = [
    '/assets/images/product/product-1.png',
    '/assets/images/product/product-2.png',
    '/assets/images/product/product-3.png',
    '/assets/images/product/product-4.png',
    '/assets/images/product/product-5.png',
  ];

  selectedImage: string = this.thumbnails[0];
  zoomOpen = false;
  zoomIndex = 0;

  // For looping carousel
  visibleCount = 4; // number of thumbnails visible at once
  startIndex = 0;
  autoSlideInterval: any;

  get visibleThumbnails() {
    const extended = [...this.thumbnails, ...this.thumbnails]; // double for looping
    return extended.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  openZoom(index: number) {
    this.zoomIndex = index;
    this.zoomOpen = true;
  }

  closeZoom() {
    this.zoomOpen = false;
  }

  nextThumb() {
    this.startIndex = (this.startIndex + 1) % this.thumbnails.length;
  }

  prevThumb() {
    this.startIndex =
      (this.startIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
  }

  nextImage() {
    this.zoomIndex = (this.zoomIndex + 1) % this.thumbnails.length;
  }

  prevImage() {
    this.zoomIndex =
      (this.zoomIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
  }

  // for size select
  sizes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  selectedSize: number | null = null;

  selectSize(s: number) {
    this.selectedSize = s;
  }

  // for tab view
  private _activeTab = 1;

  get activeTab() {
    return this._activeTab;
  }

  set activeTab(tab: number) {
    this._activeTab = tab;
  }

  specifications: Specification[] = [
    { label: 'Brand', value: 'Jewellery' },
    { label: 'Product Type', value: 'Women’s Ring' },
    { label: 'Material', value: 'Brass base with 22K gold plating' },
    { label: 'Finish', value: 'Glossy + Matte fusion' },
    { label: 'Available Sizes', value: 'Adjustable / Standard (custom sizes on request)' },
    { label: 'Weight', value: '8–14 g (varies by size)' },
    { label: 'Design Type', value: 'Statement / Traditional / Everyday' },
    { label: 'Occasion', value: 'Wedding, Festive, Party, Everyday wear' },
    { label: 'Skin Friendly', value: 'Yes, hypoallergenic polish' },
    { label: 'Warranty', value: '6 months gold polish warranty' },
    { label: 'Country of Origin', value: 'India' },
  ];

  // for accordion
  open = false;

}
