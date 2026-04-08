import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for CommonModule if standalone

@Component({
  selector: 'app-track-order',
  standalone: true, // Assuming standalone based on the previous context
  imports: [CommonModule],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css'
})
export class TrackOrderComponent {

}