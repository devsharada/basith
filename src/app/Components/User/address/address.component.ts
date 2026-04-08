import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [NgFor],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  states: string[] = [
    'Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh',
    'Madhya Pradesh', 'Rajasthan', 'Punjab', 'Haryana', 'West Bengal'
  ];

  cities: string[] = [
    'Mumbai', 'Ahmedabad', 'Bengaluru', 'Chennai', 'Lucknow',
    'Bhopal', 'Jaipur', 'Amritsar', 'Gurugram', 'Kolkata'
  ];
}
