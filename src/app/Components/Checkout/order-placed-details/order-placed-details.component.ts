import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common'; // Needed for *ngFor

// Define interfaces for structured data
interface OrderItem {
  name: string;
  size: number;
  metal: string;
  imageUrl: string;
}

interface CustomerDetails {
    name: string;
    email: string;
    phoneNumber: string;
    shippingAddress: string; // Stored with line breaks
    billingAddress: string;
    paidWith: string;
}

@Component({
  selector: 'app-order-placed-details',
  standalone: true, // Mark as standalone
  imports: [NgFor, DecimalPipe], // Add CommonModule for directives
  templateUrl: './order-placed-details.component.html',
  styleUrl: './order-placed-details.component.css'
})
export class OrderPlacedDetailsComponent {
    // Data from the image
    public totalAmount: number = 93446;
    public currencySymbol: string = '₹';

    public orderItems: OrderItem[] = [
        {
            name: 'Tone Diamond Ring',
            size: 6,
            metal: 'Gold',
            // Using placeholder image URLs based on context
            imageUrl: 'https://i.pinimg.com/736x/57/12/c9/5712c971e60d66135f0140c4dbc010fe.jpg'
        },
        {
            name: 'Tone Diamond Ring',
            size: 6,
            metal: 'Gold',
            imageUrl: 'https://i.pinimg.com/736x/a1/c7/7f/a1c77ffa4cd54e6fc1e41e6bcd91d022.jpg',
        },
    ];

    public customerDetails: CustomerDetails = {
        name: 'Joy lawson',
        email: 'joylawson@gmail.com',
        phoneNumber: '933-678-876', // Value from the image
        shippingAddress: '125, Dharamshala, Lane 4\nNew Delhi, 110059', // Value from the image
        billingAddress: 'New Delhi, 110059', // Value from the image
        paidWith: 'CardBrand ending in 1111',
    };

    /**
     * Splits the address string by newline character to display it across multiple lines in the template.
     */
    public formatAddress(address: string): string[] {
        return address.split('\n');
    }
}
