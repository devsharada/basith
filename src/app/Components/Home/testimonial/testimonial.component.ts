import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

interface Review {
  quote: string;
  name: string;
  location: string;
  initials: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial',
  imports: [NgClass, NgFor],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit, AfterViewInit, OnDestroy {
   currentIndex = 0;
  intervalId: any;

  dots: number[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  reviews: Review[] = [
    {
      quote: "Bought an engagement ring from Nexshine and it was perfect. The online experience was smooth, and the ring exceeded our expectations. Thank you for making our special moment even more memorable.",
      name: "Ajay Jand",
      location: "Jaipur",
      initials: "AJ",
      rating: 5
    },
    {
      quote: "The personalized advice and quick delivery made my purchase a joy. The quality of the diamond earrings is outstanding. Truly a five-star experience from start to finish.",
      name: "Priya Sharma",
      location: "Mumbai",
      initials: "PS",
      rating: 5
    },
    {
      quote: "I was hesitant to buy fine jewelry online, but the detailed photos and customer service convinced me. My necklace is stunning and exactly as described. Highly recommend Nexshine!",
      name: "Vikram Singh",
      location: "Delhi",
      initials: "VS",
      rating: 5
    },
    {
      quote: "Absolutely in love with my new bracelet. The craftsmanship is impeccable. It was packaged beautifully, making the unboxing experience feel truly special.",
      name: "Neha Patel",
      location: "Bangalore",
      initials: "NP",
      rating: 5
    },
    {
      quote: "Finding the perfect wedding band was easy with Nexshine's collection. Excellent service, superb communication, and a ring we will cherish forever. Thanks!",
      name: "Rohit Verma",
      location: "Chennai",
      initials: "RV",
      rating: 5
    }
  ];

  ngOnInit(): void {
    // Safe for SSR
    this.dots = Array.from({ length: this.reviews.length });
  }

  ngAfterViewInit(): void {
    // ✅ Browser-only auto slider
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.currentIndex =
          (this.currentIndex + 1) % this.reviews.length;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

}
