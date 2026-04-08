import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [NgFor],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  features = [
    {
      title: 'Exceptional Quality',
      description:
        'Every piece of jewellery is crafted with precision, certified authenticity, and timeless artistry—ensuring excellence you can treasure for a lifetime.'
    },
    {
      title: 'Unbeatable Value',
      description:
        'We believe luxury should be accessible. Our transparent pricing and ethical sourcing bring you jewellery that shines with both beauty and true value.'
    },
    {
      title: 'Impeccable Service',
      description:
        'From personalized designs to seamless after-sales support, we are dedicated to making your jewellery journey effortless, memorable, and meaningful.'
    }
  ];

}
