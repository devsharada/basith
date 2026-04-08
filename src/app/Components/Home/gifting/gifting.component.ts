import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

export interface GiftingItem {
  image: string;
  alt: string;
  link: string;
  colSpan: string;
}

@Component({
  selector: 'app-gifting',
  imports: [RouterLink, NgClass, NgFor],
  templateUrl: './gifting.component.html',
  styleUrl: './gifting.component.css'
})
export class GiftingComponent {

  giftingItems: GiftingItem[] = [
    {
      image: '/assets/images/gifting/necklace.png',
      alt: 'Necklace',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      image: '/assets/images/gifting/rings.png',
      alt: 'Rings',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      image: '/assets/images/gifting/earrings.png',
      alt: 'Earrings',
      link: '#',
      colSpan: 'col-span-2',
    },
    {
      image: '/assets/images/gifting/bracelets.png',
      alt: 'Bracelets',
      link: '#',
      colSpan: 'col-span-1',
    },
    {
      image: '/assets/images/gifting/nosepin.png',
      alt: 'Nosepin',
      link: '#',
      colSpan: 'col-span-1',
    },
  ];
}

