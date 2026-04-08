import { NgFor, isPlatformBrowser  } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [NgFor, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryComponent implements AfterViewInit, OnDestroy {

  @ViewChild('swiperRef') swiperRef!: ElementRef<any>;
  private swiperEl: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  categories = [
    { name: 'Earrings', image: '/assets/images/category/earring.png', alt: 'Earring', link: '#' },
    { name: 'Bracelets', image: '/assets/images/category/bracelet.png', alt: 'Bracelet', link: '#' },
    { name: 'Rings', image: '/assets/images/category/ring.png', alt: 'Ring', link: '#' },
    { name: 'Diamonds', image: '/assets/images/category/diamond.png', alt: 'Diamond', link: '#' },
    { name: 'Anklets', image: '/assets/images/category/anklet.png', alt: 'Anklet', link: '#' },
    { name: 'Nosepins', image: '/assets/images/category/nosepin.png', alt: 'Nose Pin', link: '#' },
    { name: 'Mangalsutra', image: '/assets/images/category/mangalsutra.png', alt: 'Mangalsutra', link: '#' }
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
        320: { slidesPerView: 3, spaceBetween: 10 },
        640: { slidesPerView: 5, spaceBetween: 15 },
        1024: { slidesPerView: 6, spaceBetween: 30 },
        1200: { slidesPerView: 6, spaceBetween: 30 },
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
