import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  type: 'normal' | 'full-width';
  image: string;
  date: string | null;
  title: string | null;
  subtitle: string | null;
  highlighted?: boolean;
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blogPosts: BlogPost[] = [
    // Row 1
    {
      type: 'normal',
      image: 'assets/images/blog/blog1.jpg',
      date: '24 Sep',
      title: 'The Art of Modern Elegance',
      subtitle: 'From delicate daily wear to dazzling occasion pieces, explore jewellery that blends contemporary design with traditional soul.'
    },
    {
      type: 'normal',
      image: 'assets/images/blog/blog2.jpg',
      date: '24 Sep',
      title: 'Where Every Sparkle Tells a Story',
      subtitle: 'Discover the artistry behind every Neoshine creation — timeless designs crafted to celebrate your moments of love, success, and style.'
    },

    // Row 2
    {
      type: 'normal',
      image: 'assets/images/blog/blog3.jpg',
      date: '24 Sep',
      title: 'Shine Beyond Ordinary',
      subtitle: 'Step into the world of Neoshine, where innovation meets craftsmanship — because your jewellery should shine as bright as you do.'
    },
    {
      type: 'normal',
      image: 'assets/images/blog/blog4.jpg',
      date: '24 Sep',
      title: 'The Glow of Gold, The Grace of Silver',
      subtitle: 'Whether it’s Diwali glam or wedding elegance, Neoshine brings you timeless pieces to match your every celebration.'
    },

    // Row 3
    {
      type: 'normal',
      image: 'assets/images/blog/blog5.jpg',
      date: '24 Sep',
      title: 'Wrapped in Elegance, Gifted with Love',
      subtitle: 'Make your festive gifting unforgettable with jewellery that speaks the language of affection and artistry.'
    },
    {
      type: 'normal',
      image: 'assets/images/blog/blog6.jpg',
      date: '24 Sep',
      title: 'Crafted with Love, Worn with Pride',
      subtitle: 'Every piece at Neoshine is a reflection of dedication, purity, and a promise — to make you feel special, every single day.'
    },

    // Row 4 - The large image in the middle (full-width)
    {
      type: 'full-width',
      image: 'assets/images/blog/blog-banner.jpg',
      date: null,
      title: null,
      subtitle: null
    },

    // Row 5
    {
      type: 'normal',
      image: 'assets/images/blog/blog7.jpg',
      date: '24 Sep',
      title: 'Tradition Reimagined',
      subtitle: 'Inspired by heritage, crafted for today, discover jewellery that bridges the beauty of the past with the elegance of the present.'
    },
    {
      type: 'normal',
      image: 'assets/images/blog/blog8.jpg',
      date: '24 Sep',
      title: 'Elegance That Speaks Without Words',
      subtitle: 'Let your jewellery do the talking — graceful, glamorous, and glowing, just like the Neoshine woman.'
    },

    // Row 6
    {
      type: 'normal',
      image: 'assets/images/blog/blog9.jpg',
      date: '24 Sep',
      title: 'Celebrate the Season of Shine',
      subtitle: 'Festivals come and go — but your sparkle should stay forever. Adorn yourself with pieces that carry the essence of joy and craftsmanship.'
    },
    {
      type: 'normal',
      image: 'assets/images/blog/blog10.jpg',
      date: '24 Sep',
      title: 'Festive Brilliance by Neoshine',
      subtitle: 'This season, let your light shine brighter than the diyas. Discover handcrafted jewellery that celebrates tradition with a touch of modern brilliance.'
    },
  ];
}
