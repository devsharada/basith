import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";

// 1. Define the interface for the article data
interface Article {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  author: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-related-article',
  // Use standalone: true for modern Angular components
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './related-article.component.html',
  styleUrl: './related-article.component.css'
})
export class RelatedArticleComponent {

  // 2. Dynamic Article Data
  relatedArticles: Article[] = [
    {
      id: 1,
      imageSrc: 'assets/images/blog/blog11.jpg',
      imageAlt: 'Pile of Silver Coins',
      title: 'When Shine Meets Soul: Journey of Every Nexshine Creation',
      description: 'Every piece of jewellery we craft is more than metal and stone — it’s an emotion brought to life. From the first sketch to the final polish',
      author: 'Lisa Ray',
      date: 'Oct 13, 2023',
      link: '/blog/blog-details' // Use a proper link
    },
    {
      id: 2,
      imageSrc: 'assets/images/blog/blog12.jpg',
      imageAlt: 'Pearl and Gold Pendant',
      title: 'Caring for Your Pearls: Essential Maintenance Tips',
      description: 'Learn the best practices for cleaning, storing, and maintaining your pearl jewelry to ensure its lasting luster and beauty.',
      author: 'Marcus Chen',
      date: 'Sep 25, 2023',
      link: '/blog/blog-details'
    },
    {
      id: 3,
      imageSrc: 'assets/images/blog/blog13.jpg',
      imageAlt: 'Assortment of Gold Heart Jewelry',
      title: 'Understanding Gold Purity: Karats Explained',
      description: 'A comprehensive guide to understanding the different levels of gold purity, from 10K to 24K, and what it means for your purchases.',
      author: 'Sarah Jenkins',
      date: 'Aug 1, 2023',
      link: '/blog/blog-details'
    }
  ];

  // Optional: TrackBy function for *ngFor performance optimization
  articleTrackBy(index: number, article: Article): number {
    return article.id;
  }
}
