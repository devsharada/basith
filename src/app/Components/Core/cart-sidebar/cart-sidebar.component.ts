import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

// Define the structure for a cart item
interface CartItem {
  id: number;
  name: string;
  size: string;
  metal: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent implements OnInit, OnDestroy {


  // CRITICAL: Output event to notify the parent when the sidebar should be removed from the DOM
  @Output() close = new EventEmitter<void>();

  // Property to control the internal state (for CSS transition/animation)
  // Starts as true because the parent's *ngIf just created it.
  isOpen: boolean = true;

  // Store the timeout ID
  private animationTimeout: any;
  // Define the duration of the CSS transition in milliseconds
  private transitionDurationMs: number = 300;

  // --- Mock Data (Keep these) ---
  cartItems: CartItem[] = [
    { id: 1, name: 'Tone Diamond Ring', size: '6', metal: 'Gold', price: 5000, quantity: 1, image: 'https://i.pinimg.com/736x/57/12/c9/5712c971e60d66135f0140c4dbc010fe.jpg' },
    { id: 2, name: 'Tone Diamond Ring', size: '6', metal: 'Gold', price: 5000, quantity: 1, image: 'https://i.pinimg.com/1200x/3c/36/a7/3c36a7800c5e5ec71008c67073795262.jpg' },
  ];
  estimatedShipping: number = 150;

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get estimateTotal(): number {
    return this.subtotal + this.estimatedShipping;
  }
  // ------------------------------

  // Clean up the timeout when the component is destroyed
  ngOnDestroy(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  // Lifecycle hook for initial setup (if needed)
  ngOnInit(): void {
    // Optional: Add logic here if you want to start the closing animation
    // immediately if the parent passes a 'false' input, but since you use *ngIf,
    // it will always be created in an 'open' state (isOpen = true).
  }

  // CRITICAL: Method to start the close animation and then emit the close event
  onClose(): void {
    if (!this.isOpen) return; // Prevent double-closing

    // Clear any existing timeout before setting a new one
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }

    // 1. Start the CSS closing transition (sidebar moves out of view)
    this.isOpen = false;

    // 2. Set a timer equal to the transition duration
    this.animationTimeout = setTimeout(() => {
      // 3. After the animation is complete, tell the parent to remove the component
      this.close.emit();
    }, this.transitionDurationMs);
  }

  goBack(): void {
    this.onClose();
  }

  // The checkout button should also close the sidebar
  checkout(): void {
    console.log('Proceeding to Checkout...');
    this.onClose();
  }

  // --- Other Methods (Keep these) ---
  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  updateQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      item.quantity = newQuantity;
    }
  }

constructor(private router: Router) {}

  /**
   * Handles the 'Continue to Checkout' click.
   * 1. Initiates the sidebar closing animation (isOpen = false).
   * 2. Waits for the animation to finish (using transitionDurationMs).
   * 3. Emits the 'close' event to remove the component from the DOM.
   * 4. Navigates to the '/order_details' route.
   */
  goToOrderDetails() {
    if (!this.isOpen) return; // Only proceed if the sidebar is currently open

    // Clear any existing timeout before setting a new one
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }

    // 1. Start the CSS closing transition
    this.isOpen = false;

    // 2. Set a timer equal to the transition duration
    this.animationTimeout = setTimeout(() => {
      // 3. After the animation is complete:
      // a. Tell the parent to remove the component
      this.close.emit();
      // b. Navigate to the order details page
      this.router.navigate(['/checkout']);
    }, this.transitionDurationMs);
  }
}
