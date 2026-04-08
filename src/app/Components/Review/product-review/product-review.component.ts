import { NgFor, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, } from '@angular/core';
import { ReviewPopupComponent } from '../review-popup/review-popup.component';



@Component({
  selector: 'app-product-review',
  imports: [NgFor, NgIf, ReviewPopupComponent],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ProductReviewComponent  implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  private initialized = false;

  reviews=[
    {
      rating:"assets/images/home/rating.png",
      alt:"rating",
      images: [
        '/assets/images/product/product1.png',
        '/assets/images/product/product2.png',
        '/assets/images/product/product3.png',
        '/assets/images/product/product4.png',
        '/assets/images/product/product5.png',
      ],
      name:"Riya Rathore",
      text: "“I’m amazed by the sparkle and detailing of this piece — it feels luxurious yet comfortable for daily wear. Definitely a timeless addition to my collection. The craftsmanship is truly exceptional; the finish and shine make it look far more expensive than it is. I’ve already received so many compliments!”"
    },
    {
      rating:"assets/images/home/rating1.png",
      alt:"rating",
      images: [
        '/assets/images/product/product1.png',
        '/assets/images/product/product2.png',
        '/assets/images/product/product3.png',
        '/assets/images/product/product4.png',
        '/assets/images/product/product5.png',
      ],
      name: "Anjali Mehta",
      text: "“Such a beautiful piece, the stones shine brilliantly and the quality feels top-notch. It instantly elevates any outfit I pair it with.” “I was impressed with the elegant design and perfect finishing. The jewelry looks even more gorgeous in real life than in the pictures."
    },
    {
      rating:"assets/images/home/rating.png",
      alt:"rating",
      images: [
        '/assets/images/product/product1.png',
        '/assets/images/product/product2.png',
        '/assets/images/product/product3.png',
        '/assets/images/product/product4.png',
        '/assets/images/product/product5.png',
      ],
      name:"Riya Rathore",
      text: "“I’m amazed by the sparkle and detailing of this piece — it feels luxurious yet comfortable for daily wear. Definitely a timeless addition to my collection. The craftsmanship is truly exceptional; the finish and shine make it look far more expensive than it is. I’ve already received so many compliments!”"
    },
    {
      rating:"assets/images/home/rating1.png",
      alt:"rating",
      images: [
        '/assets/images/product/product1.png',
        '/assets/images/product/product2.png',
        '/assets/images/product/product3.png',
        '/assets/images/product/product4.png',
        '/assets/images/product/product5.png',
      ],
      name: "Anjali Mehta",
      text: "“Such a beautiful piece, the stones shine brilliantly and the quality feels top-notch. It instantly elevates any outfit I pair it with.” “I was impressed with the elegant design and perfect finishing. The jewelry looks even more gorgeous in real life than in the pictures."
    },

  ]

 private initSwiper() {
  if (this.initialized) return;
  const swiperEl = this.swiperRef?.nativeElement as any;
  if (!swiperEl) return;

  Object.assign(swiperEl, {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    grabCursor: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-review-next',
      prevEl: '.swiper-review-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 15 },
    },
  });

  setTimeout(() => {
    swiperEl.initialize?.();
    this.initialized = true;

    swiperEl.addEventListener('mouseenter', () =>
      swiperEl.swiper.autoplay?.stop()
    );
    swiperEl.addEventListener('mouseleave', () =>
      swiperEl.swiper.autoplay?.start()
    );
  });
}

  ngAfterViewInit() {
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }


openReviewModal() {
throw new Error('Method not implemented.');
}

  // zoom view for review images
   isImageModalOpen = false;
  modalImages: string[] = [];
  activeImageIndex = 0;

  openImageModal(images: string[], index: number) {
    this.modalImages = images;
    this.activeImageIndex = index;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }


}
