import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bangle-size-guide',
  imports: [NgFor],
  templateUrl: './bangle-size-guide.component.html',
  styleUrl: './bangle-size-guide.component.css'
})
export class BangleSizeGuideComponent {

   tableOne = [
    { size: "2.2", dia: "5.4" },
    { size: "2.4", dia: "5.7" },
    { size: "2.6", dia: "6.0" },
    { size: "2.8", dia: "6.2" },
    { size: "2.10", dia: "6.6" },
  ];
}
