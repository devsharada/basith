import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
// Define an interface for structured item data
interface OrderItem {
  id: number;
  name: string;
  size: number;
  metal: string;
  basePrice: number; // Price per unit
  quantity: number;
  imageUrl: string;
}

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [NgIf, NgFor, DecimalPipe, FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  // --- Configuration ---
  public currencySymbol: string = '₹';

  // --- Order Data ---
  public orderItems: OrderItem[] = [];
  public shippingCost: number = 150; // Fixed value from image

  // --- Discount Data ---
  // CORRECTION: Add [(ngModel)] to bind this to the input
  public discountCodeInput: string = 'BUYR';
  public appliedDiscount: { code: string, percentage: number } | null = { code: 'BUYR', percentage: 10 };

  // --- Form Data (Using initial values from the image) ---
  public formData = {
    email: 'joylawson@gmail.com',
    phoneNumber: '987-425-7728',
    countryCode: '+91', // For display next to the phone number
    selectedPaymentMethod: 'visa', // 'visa' or 'paypal'
    cardHolderName: '',
    billingCountry: 'United States',
    zipCode: '73923',
    city: 'New York',
    billingSameAsShipping: true,
  };

constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize the order items to match the image (2 items at ₹5,000 each)
    this.orderItems = [
      { id: 1, name: 'Tone Diamond Ring', size: 6, metal: 'Gold', basePrice: 5000, quantity: 1, imageUrl: 'https://i.pinimg.com/736x/57/12/c9/5712c971e60d66135f0140c4dbc010fe.jpg' },
      { id: 2, name: 'Tone Diamond Ring', size: 6, metal: 'Gold', basePrice: 5000, quantity: 1, imageUrl: 'https://i.pinimg.com/736x/c6/5d/da/c65dda475a83da6d3e02927267c4608d.jpg' },
    ];
  }


  // Increase the quantity of an item
  increaseQuantity(item: OrderItem) {
    item.quantity++;
  }

  // Decrease the quantity of an item
  decreaseQuantity(item: OrderItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Remove an item from the list
  // The HTML uses this method signature
  removeItem(item: OrderItem) {
    this.orderItems = this.orderItems.filter(i => i.id !== item.id);
  }

  // Removed redundant methods: updateQuantity(item: OrderItem, change: number) and removeItem(id: number)

  // --- Calculated Getters for Summary ---

  get subtotal(): number {
    // Calculates the total price of all items
    return this.orderItems.reduce((acc, item) => acc + (item.basePrice * item.quantity), 0);
  }

  get discountAmount(): number {
    // Calculates the discount amount based on the applied discount
    if (this.appliedDiscount) {
      return Math.round(this.subtotal * (this.appliedDiscount.percentage / 100));
    }
    return 0;
  }

  get discountPercentageDisplay(): string {
    return this.appliedDiscount ? ` (${this.appliedDiscount.percentage}%)` : '';
  }

  get total(): number {
    // Calculates the final total (matching ₹ 5,050 from the image)
    return this.subtotal + this.shippingCost - this.discountAmount;
  }


  // --- Methods for Functionality ---

  // Called when the 'Apply' button is clicked
  public applyDiscount(): void {
    const code = this.discountCodeInput.toUpperCase().trim();
    // In a real application, this would call an API to validate the code
    if (code === 'BUYR') {
      this.appliedDiscount = { code: 'BUYR', percentage: 10 };
      console.log('Discount applied successfully.');
    } else {
      this.appliedDiscount = null;
      console.log('Invalid discount code.');
    }
  }

  public submitOrder(): void {
    // Placeholder for payment and order submission logic
    console.log('Submitting order with data:', this.formData);
    console.log('Calculated Total:', this.currencySymbol, this.total);
    // Logic to initiate payment and navigate
    this.router.navigate(['/order-placed-details']);
  }
}
