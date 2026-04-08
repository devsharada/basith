import { NgClass, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { OrdersComponent } from "../orders/orders.component";
import { UserWishlistComponent } from "../user-wishlist/user-wishlist.component";
import { AddressComponent } from "../address/address.component";
import { UserCartComponent } from "../user-cart/user-cart.component";

// Define the TabKey type for better type safety
type TabKey = 'profile' | 'orders' | 'cart' | 'wishlist' | 'address' |  'logout';

@Component({
  selector: 'app-account',
  imports: [NgClass, NgFor, NgSwitch, NgSwitchCase, ProfileComponent, OrdersComponent, UserWishlistComponent, AddressComponent, UserCartComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {


  // Use the defined TabKey type for strict checking
  activeTab: TabKey = 'profile';

  userName: string = 'Joy Lawson';
  userEmail: string = 'joylawson@gmail.com';

  // Explicitly defined array of tabs
  tabs: { key: TabKey; label: string }[] = [
    { key: 'profile', label: 'Profile' },
    { key: 'address', label: 'Address' },
    { key: 'orders', label: 'Orders' },
    { key: 'cart', label: 'Cart' },
    { key: 'wishlist', label: 'Wishlist' },
    { key: 'logout', label: 'Logout' },
  ];

  ngOnInit(): void {
    this.activeTab = 'profile';
  }

  // Handle click event, updating the active tab
  handleTabClick(tabKey: TabKey): void {
    this.activeTab = tabKey;
  }

}
