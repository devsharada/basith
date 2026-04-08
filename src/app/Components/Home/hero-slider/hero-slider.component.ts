import { NgFor, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
// Import and register the Swiper custom element
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

// Register Swiper's custom elements
register();

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSliderComponent implements AfterViewInit {
  // Use 'SwiperContainer' type directly for better type safety
  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;

  heroSlider = [
    { name: 'ring with studded diamond', image: 'assets/images/home/banner1.png', link: '' },
    { name: 'ring with studded diamond', image: 'assets/images/home/banner1.png', link: '' },
    { name: 'ring with studded diamond', image: 'assets/images/home/banner1.png', link: '' },
    { name: 'ring with studded diamond', image: 'assets/images/home/banner1.png', link: '' }

  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Check for browser platform
    if (isPlatformBrowser(this.platformId)) {

      if (this.swiperContainer && this.swiperContainer.nativeElement) {
        const swiperOptions: SwiperOptions = {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            clickable: true,
          },
          // Accessibility options for best practice
          a11y: {
            enabled: true,
          }
        };

        // Assigning options to the native element
        Object.assign(this.swiperContainer.nativeElement, swiperOptions);

        // Calling initialize() on the native element
        this.swiperContainer.nativeElement.initialize();
      }
    }
  }
}
