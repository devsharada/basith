// review-popup.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-review-popup',
  imports: [NgFor, NgClass, NgIf, FormsModule],
  templateUrl: './review-popup.component.html',
  styleUrl: './review-popup.component.css'
})
export class ReviewPopupComponent {
  @Output() reviewSubmitted = new EventEmitter<any>();

  isReviewModalOpen = false;

  newReview = {
    name: '',
    email: '',
    review: '',
    rating: 0,
    images: [] as string[]
  };

  openReviewModal() {
    this.isReviewModalOpen = true;
  }

  closeReviewModal() {
    this.isReviewModalOpen = false;
    this.newReview = { name: '', email: '', review: '', rating: 0, images: [] };
  }

  onImageSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.newReview.images.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  removeImage(index: number) {
  this.newReview.images.splice(index, 1);
}

  submitReview() {
    if (!this.newReview.name || !this.newReview.review || this.newReview.rating === 0) {
      alert('Please fill all required fields');
      return;
    }

    this.reviewSubmitted.emit({
      ...this.newReview,
      date: new Date().toLocaleDateString(),
      user: 'Verified Buyer'
    });

    this.closeReviewModal();
  }
}
