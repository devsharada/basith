import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface for the market data structure
interface Market {
  marketName: string;
  status: 'Active' | 'Draft' | 'Archived';
  included: string;
  customizations: string;
  iconUrl: string;       // For the Included (Flag) icon
  marketIconUrl: string; // <-- ADDED for the Market (Globe) icon
}

@Component({
  selector: 'app-admin-markets',
  // Mark as standalone for modern Angular applications
  standalone: true,
  // Import CommonModule to use *ngFor, *ngIf, [ngClass]
  imports: [CommonModule],
  templateUrl: './admin-markets.component.html',
  styleUrl: './admin-markets.component.css'
})
export class AdminMarketsComponent {
  // Mock data for the table
  marketData: Market[] = [
    {
      marketName: 'India',
      status: 'Active',
      included: 'India', 
      customizations: '...',
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/6211/6211446.png',         // Placeholder for your Flag icon link
      marketIconUrl: 'https://cdn-icons-png.flaticon.com/128/814/814587.png' // <-- Placeholder for your Market Globe icon link
    }
  ];

  // State for the navigation tabs and time frame buttons
  activeTab: 'All' | 'Active' | 'Draft' | 'Archived' = 'All';
  activeTimeframe: 'Last 30 Days' | 'All Channels' = 'Last 30 Days';

  // NOTE: getFlag function is removed. Flag image/icon placeholder is used directly in HTML.
}