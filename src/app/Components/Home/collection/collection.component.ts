import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection',
  imports: [NgFor, RouterLink, NgClass],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

   collections = [
    { name: 'Everyday Elegance Bracelet', image: '/assets/images/collection/collection1.png', alt: 'Bracelet', link: '#' },
    { name: 'Lakshmi Temple Necklace', image: '/assets/images/collection/collection2.png', alt: 'Necklace', link: '#' },
    { name: 'Minimal Gold Earrings', image: '/assets/images/collection/collection3.png', alt: 'Earrings', link: '#' },
    { name: 'Antique Gold Rings & Bangles', image: '/assets/images/collection/collection4.png', alt: 'Bangles', link: '#' },
  ];


i: any;

}
