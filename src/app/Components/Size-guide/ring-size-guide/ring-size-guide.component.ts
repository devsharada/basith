import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ring-size-guide',
  imports: [NgFor],
  templateUrl: './ring-size-guide.component.html',
  styleUrl: './ring-size-guide.component.css'
})
export class RingSizeGuideComponent {

 tableOne = [
    { size: 1, inch: 1.61, mm: 41 },
    { size: 2, inch: 1.64, mm: 41.7 },
    { size: 3, inch: 1.68, mm: 42.9 },
    { size: 4, inch: 1.73, mm: 44.1 },
    { size: 5, inch: 1.76, mm: 44.8 },
    { size: 6, inch: 1.81, mm: 46.1 },
    { size: 7, inch: 1.86, mm: 47.4 },
    { size: 8, inch: 1.88, mm: 48 },
    { size: 9, inch: 1.91, mm: 48.7 },
    { size: 10, inch: 1.96, mm: 50 },
    { size: 11, inch: 2.01, mm: 51.2 },
    { size: 12, inch: 2.09, mm: 51.9 },
    { size: 13, inch: 2.14, mm: 53.1 },
    { size: 14, inch: 2.14, mm: 54.4 },
    { size: 15, inch: 2.16, mm: 55.1 },
  ];

  tableTwo = [
    { size: 16, inch: 2.21, mm: 56.3 },
    { size: 17, inch: 2.24, mm: 57 },
    { size: 18, inch: 2.29, mm: 58.3 },
    { size: 19, inch: 2.31, mm: 58.9 },
    { size: 20, inch: 2.37, mm: 60.2 },
    { size: 21, inch: 2.39, mm: 60.8 },
    { size: 22, inch: 2.44, mm: 62.1 },
    { size: 23, inch: 2.46, mm: 62.7 },
    { size: 24, inch: 2.51, mm: 64 },
    { size: 25, inch: 2.54, mm: 64.6 },
    { size: 26, inch: 2.59, mm: 65.9 },
    { size: 27, inch: 2.64, mm: 67.2 },
    { size: 28, inch: 2.66, mm: 67.8 },
    { size: 29, inch: 2.72, mm: 69.1 },
    { size: 30, inch: 2.74, mm: 69.7 }
  ];

}
