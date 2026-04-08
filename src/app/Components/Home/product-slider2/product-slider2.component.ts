import { NgFor, isPlatformBrowser  } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-slider2',
  imports: [NgFor, RouterLink],
  templateUrl: './product-slider2.component.html',
  styleUrl: './product-slider2.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSlider2Component implements AfterViewInit, OnDestroy{

  @ViewChild('swiperRef') swiperRef!: ElementRef<any>;
  private swiperEl: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  products = [
    { name: 'Pure Gold Ring', price: '₹ 49,999', image: '/assets/images/product/product1.png', alt: 'Earring', link: '/product-details' },
    { name: 'Beautiful Gold Necklace', price: '₹ 49,999', image: '/assets/images/product/product2.png', alt: 'Bracelet', link: '/product-details' },
    { name: 'Gold Earrings', price: '₹ 49,999', image: '/assets/images/product/product3.png', alt: 'Ring', link: '/product-details' },
    { name: 'Gold Pendant Set', price: '₹ 49,999', image: '/assets/images/product/product4.png', alt: 'Diamond', link: '/product-details' },
    { name: 'Gold Bangles', price: '₹ 49,999', image: '/assets/images/product/product5.png', alt: 'Anklet', link: '/product-details' },
    { name: 'Gold Earrings', price: '₹ 49,999', image: '/assets/images/product/product3.png', alt: 'Ring', link: '/product-details' },
  ];

  ngAfterViewInit() {
    // Skip Swiper on server
    if (!isPlatformBrowser(this.platformId)) return;

    this.initSwiper();
  }

  private initSwiper() {
    if (!this.swiperRef?.nativeElement) return;

    this.swiperEl = this.swiperRef.nativeElement;

    if (this.swiperEl.swiper) {
      this.swiperEl.swiper.destroy(true, true);
    }

    Object.assign(this.swiperEl, {
      slidesPerView: 6,
      spaceBetween: 20,
      loop: true,
      speed: 600,
      grabCursor: true,
      freeMode: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 20 },
      },
    });

    // Browser-safe alternative
    setTimeout(() => {
      this.swiperEl.initialize();

      this.swiperEl.addEventListener('mouseenter', () =>
        this.swiperEl.swiper?.autoplay?.stop()
      );
      this.swiperEl.addEventListener('mouseleave', () =>
        this.swiperEl.swiper?.autoplay?.start()
      );
    });
  }

  ngOnDestroy() {
    if (this.swiperEl?.swiper) {
      this.swiperEl.swiper.destroy(true, true);
    }
  }
}
