import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  imports: [NgFor, NgClass],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
  images = [
    '/assets/images/home/pendants.png',
    '/assets/images/home/earrings.png',
    '/assets/images/home/bangles.png',
    '/assets/images/home/rings.png',
    '/assets/images/home/necklace.png',
  ];

  currentIndex = 2;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  getPosition(index: number) {
    const diff = index - this.currentIndex;

    switch (diff) {
      case 0:
        return 'z-40 scale-100 rotate-0 translate-x-0 translate-y-0';

      case -1:
        return 'z-30 scale-[0.96] -rotate-6 -translate-x-[220px] translate-y-6';

      case 1:
        return 'z-30 scale-[0.96] rotate-6 translate-x-[220px] translate-y-6';

      case -2:
        return 'z-20 scale-[0.92] -rotate-12 -translate-x-[440px] translate-y-14';

      case 2:
        return 'z-20 scale-[0.92] rotate-12 translate-x-[440px] translate-y-14';

      default:
        return 'opacity-0 pointer-events-none';
    }
  }
  
}
