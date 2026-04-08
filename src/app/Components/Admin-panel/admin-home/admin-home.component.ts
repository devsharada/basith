import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf, NgStyle } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent implements AfterViewInit {
   @ViewChild('progressChart') progressChartRef!: ElementRef;
  @ViewChild('salesChart') salesChartRef!: ElementRef;
  @ViewChild('productSoldChart') productSoldChartRef!: ElementRef;
  @ViewChild('customerChart') customerChartRef!: ElementRef;
  @ViewChild('stockChart') stockChartRef!: ElementRef;
  @ViewChild('doughnutChart') doughnutChartRef!: ElementRef;
  @ViewChild('salesMetalChart') salesMetalChartRef!: ElementRef;
  @ViewChild('revenueChart') revenueChartRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.progressChart(); // visible first
        this.salesChart();
        this.productSoldChart();
        this.customerChart();
        this.stockChart();
        this.doughnutChart();
        this.salesMetalChart();
        this.revenueChart();
      }, 0);
    }
  }
  // progress chart
   progressChart() {
    const ctx = this.progressChartRef.nativeElement.getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [70, 30], // 70% filled, 30% empty
          backgroundColor: ['#FF9608', '#E6E6E6'], // orange + light gray
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -90, // start from top center
      circumference: 180, // draw half circle
      cutout: '75%', // moved here: controls inner radius
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
  });
}

  // for sales analysis chart
  salesChart() {
    const ctx = this.salesChartRef.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Daily', 'Weekly', 'Monthly'],
        datasets: [
          {
            data: [3000, 4500, 6500],
            borderColor: '#FF9608',
            borderWidth: 2,
            tension: 0.5,
            pointBackgroundColor: '#FF9608',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 1,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          y: {
            display: true, // show Y-axis
            grid: { display: false }, // hide horizontal grid lines
            border: {
              display: true, // show axis line
              width: 1, // axis line width
            },
            ticks: { display: true, color: '#032B76' },
          },
          x: {
            grid: { display: false }, // hide vertical grid lines
            ticks: { font: { size: 10, weight: 'bold' }, color: '#032B76' },
          },
        },
      },
    });
  }

  // product sold chart
  productSoldChart() {
    const ctx = this.productSoldChartRef.nativeElement.getContext('2d');

    // Create linear gradient
    const gradient = ctx.createLinearGradient(
      0,
      0,
      0,
      this.productSoldChartRef.nativeElement.height
    );
    gradient.addColorStop(0, 'rgba(97, 148, 219, 0.38)');
    gradient.addColorStop(0.75, '#064DE6');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Rings', 'Pendants', 'Earrings', 'Stone'],
        datasets: [
          {
            data: [50, 70, 40, 50],
            backgroundColor: gradient, // apply gradient to all bars
            borderRadius: 4,
            barPercentage: 0.8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.raw} sold`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 }, color: '#949494' },
          },
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: { font: { size: 10 }, color: '#949494' },
          },
        },
      },
    });
  }
  // Total customer chart
  customerChart() {
    const ctx = this.customerChartRef.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: [400, 900, 700, 750, 650, 1000],
            backgroundColor: '#032B76', // single color for bars
            barPercentage: 0.2, // slim bars
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.raw} customers`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false }, // hide vertical grid lines
            ticks: { font: { size: 10 }, color: '#949494' },
          },
          y: {
            grid: { display: false }, // hide horizontal grid lines
            ticks: { font: { size: 10 }, color: '#949494' },
          },
        },
      },
    });
  }
  // Total items in stock
  stockChart() {
    const ctx = this.stockChartRef.nativeElement.getContext('2d');

    // Create vertical gradient for the line fill
    const gradient = ctx.createLinearGradient(
      0,
      0,
      0,
      this.stockChartRef.nativeElement.height
    );
    gradient.addColorStop(0, 'rgba(255, 150, 8, 0.3)'); // semi-transparent at top
    gradient.addColorStop(1, 'rgba(255, 150, 8, 0)');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Rings', 'Earrings', 'Stone', 'Necklace', 'Pendant'],
        datasets: [
          {
            data: [1000, 4500, 1800, 3800, 3200],
            borderColor: '#FF9608',
            backgroundColor: gradient,
            fill: true,
            tension: 0,
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#FF9608',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              // Type-safe: `context.raw` is typed as unknown, so cast it to number
              label: (context) => {
                const value = Number(context.raw); // cast unknown → number
                return `${value / 1000}k`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `${Number(value) / 1000}k`, // cast value to number
              color: '#949494',
              font: { size: 10 },
            },
            grid: {
              display: false,
            },
          },
          x: {
            ticks: { color: '#949494', font: { size: 10 } },
            grid: { display: false },
          },
        },
      },
    });
  }
  // Sales by Categories
  doughnutChart() {
    if (!isPlatformBrowser(this.platformId)) return; // ensures it only runs in the browser

    const ctx = this.doughnutChartRef.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Rings', 'Earrings', 'Bangles', 'Gemstone', 'Others'],
        datasets: [
          {
            data: [120, 80, 60, 40, 30],
            backgroundColor: [
              '#FF9608',
              '#59C0BB',
              '#DCD6FA',
              '#C0CEF8',
              '#CBF6F1',
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              font: { size: 10 },
              color: '#000000',
              usePointStyle: true, // use circle instead of rectangle
              pointStyle: 'circle', // explicitly define circle
              padding: 15, // spacing between legend items
            },
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => `${context.label}: ${Number(context.raw)}`,
            },
          },
        },
      },
    });
  }
  // Sales by metal type
  salesMetalChart() {
    const ctx = this.salesMetalChartRef.nativeElement.getContext('2d');

    const labels = ['Gold', 'Rose Gold', 'Silver', 'Gemstone'];
    const data = [30, 25, 18, 11];
    const colors = ['#FF9608', '#032B76', '#064DE6', '#4A92FA'];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels, // X-axis labels
        datasets: [
          {
            label: 'Sales', // this label will be ignored in custom legend
            data: data,
            backgroundColor: colors,
            borderRadius: 4,
            barPercentage: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true, // circle in legend
              generateLabels: (chart) => {
                const dataset = chart.data.datasets[0];
                return chart.data.labels!.map((label, index) => ({
                  text: label as string,
                  fillStyle: (dataset.backgroundColor as string[])[index],
                  strokeStyle: '#fff',
                  lineWidth: 2,
                  hidden: false,
                  index: index,
                  pointStyle: 'circle',
                  padding: 15,
                }));
              },
            },
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (tooltipItem) =>
                `${tooltipItem.label}: ${tooltipItem.raw}K`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 }, color: '#949494' },
          },
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: { font: { size: 10 }, color: '#949494' },
          },
        },
      },
    });
  }
  // revenue chart
  revenueChart() {
    const ctx = this.revenueChartRef.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'This Year',
            data: [0, 30, 15, 85, 30, 70, 90],
            borderColor: '#FF9608',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#FF9608',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
          },
          {
            label: 'Last Year',
            data: [25, 5, 52, 25, 40, 25, 68],
            borderColor: '#4A92FA',
            borderWidth: 2,
            tension: 0.4,
            borderDash: [6, 2], //  dashed line
            pointRadius: 4,
            pointBackgroundColor: '#4A92FA',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              font: { size: 12, weight: 'bold' },
              usePointStyle: true,
            },
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.raw}K`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#949494', font: { size: 10, weight: 'bold' } },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#949494',
              font: { size: 10 },
              callback: (value) => `${value}K`,
            },
            grid: { display: false },
          },
        },
      },
    });
  }

  // Most Selling Products
  mostSellingProducts = [
    {
      name: 'Royal Spark Ring',
      time: '7 minutes ago',
      price: '₹4,999',
      image:
        'https://i.pinimg.com/1200x/30/0c/9b/300c9be67a985a8a421266f2b856935a.jpg',
    },
    {
      name: 'Radiant Charm Bracelet',
      time: '2 minutes ago',
      price: '₹2,499',
      image:
        'https://i.pinimg.com/1200x/e4/02/77/e40277e6b6d8029e09946851bec0b917.jpg',
    },
    {
      name: 'Golden Shine Earrings',
      time: '8 minutes ago',
      price: '₹3,199',
      image:
        'https://i.pinimg.com/1200x/0b/9b/98/0b9b98bd5213d51f253037c62fff7ecc.jpg',
    },
    {
      name: 'Elegant Pendent',
      time: '15 minutes ago',
      price: '₹5,299',
      image:
        'https://i.pinimg.com/1200x/a2/fb/0d/a2fb0dd087a4a0810c4f574f28313a2d.jpg',
    },
  ];
  // Low Stock Alert
  lowStockAlerts = [
    {
      name: 'Blue Sapphire Stone',
      inStock: '> 1800',
      price: '5600',
      stars: 4,
      iconType: 'gem',
      image:
        'https://i.pinimg.com/1200x/b7/03/33/b7033355feb88346a8626a62e6709bfb.jpg',
    },
    {
      name: 'Bow Spark Ring',
      inStock: '> 1800',
      price: '5600',
      stars: 4,
      iconType: 'ring',
      image:
        'https://i.pinimg.com/1200x/52/36/40/523640d915d47749e11d8dcc6b93900a.jpg',
    },
    {
      name: 'Blue Sapphire Stone',
      inStock: '> 1800',
      price: '5600',
      stars: 4,
      iconType: 'gem',
      image:
        'https://i.pinimg.com/1200x/b7/03/33/b7033355feb88346a8626a62e6709bfb.jpg',
    },
  ];

  // Trending Items
  trendingItems = [
    {
      name: 'Royal Spark Ring',
      inStock: '> 500',
      price: '5600',
      stars: 4,
      image:
        'https://i.pinimg.com/1200x/30/0c/9b/300c9be67a985a8a421266f2b856935a.jpg',
    },
    {
      name: 'Royal Spark Ring',
      inStock: '> 100',
      price: '5600',
      stars: 4,
      image:
        'https://i.pinimg.com/1200x/95/1c/00/951c00b220f7de5042b29a6f3ae6045f.jpg',
    },
    {
      name: 'Royal Spark Ring',
      inStock: '> 500',
      price: '5600',
      stars: 4,
      image:
        'https://i.pinimg.com/1200x/30/0c/9b/300c9be67a985a8a421266f2b856935a.jpg',
    },
  ];

  getStarArray(stars: number): number[] {
    return Array(stars).fill(0);
  }
  // Recent order
  recentOrderItems = [
    {
      name: 'Royal Spark Ring',
      time: '7 minutes ago',
      price: '₹4,999',
      image:
        'https://i.pinimg.com/1200x/30/0c/9b/300c9be67a985a8a421266f2b856935a.jpg',
    },
    {
      name: 'Radiant Charm Bracelet',
      time: '2 minutes ago',
      price: '₹2,499',
      image:
        'https://i.pinimg.com/1200x/e4/02/77/e40277e6b6d8029e09946851bec0b917.jpg',
    },
    {
      name: 'Golden Shine Earrings',
      time: '8 minutes ago',
      price: '₹3,199',
      image:
        'https://i.pinimg.com/1200x/0b/9b/98/0b9b98bd5213d51f253037c62fff7ecc.jpg',
    },
    {
      name: 'Elegant Pendent',
      time: '15 minutes ago',
      price: '₹5,299',
      image:
        'https://i.pinimg.com/1200x/a2/fb/0d/a2fb0dd087a4a0810c4f574f28313a2d.jpg',
    },
  ];
  // notifications
  notifications = [
    {
      icon: 'campaign',
      text: 'You launched a campaign.',
      count: '20',
      time: 'Just now',
      color: 'orange',
    },
    {
      icon: 'user',
      text: 'New user signed up.',
      count: '10',
      time: '32 minutes ago',
      color: 'darkblue',
    },
    {
      icon: 'user',
      text: 'New user signed up.',
      count: '20',
      time: '32 minutes ago',
      color: 'darkblue',
    },
    {
      icon: 'restock',
      text: 'You restocked XYZ product.',
      count: null,
      time: '8 hours ago',
      color: 'green',
    },
    {
      icon: 'lowstock',
      text: 'Running low on XYZ product.',
      count: null,
      time: 'Today, 10:24 AM',
      color: 'red',
    },
  ];

  // New Arrivals
    newArrivals = [
    {
      name: 'Royal Spark Ring',
      time: '7 minutes ago',
      count: '40 pcs',
      image: 'https://i.pinimg.com/1200x/30/0c/9b/300c9be67a985a8a421266f2b856935a.jpg'
    },
    {
      name: 'Radiant Charm Bracelet',
      time: '2 minutes ago',
      count: '20 pcs',
      image: 'https://i.pinimg.com/1200x/e4/02/77/e40277e6b6d8029e09946851bec0b917.jpg'
    },
    {
      name: 'Golden Shine Earrings',
      time: '8 minutes ago',
      count: '40 pcs',
      image: 'https://i.pinimg.com/1200x/0b/9b/98/0b9b98bd5213d51f253037c62fff7ecc.jpg'
    },
    {
      name: 'Elegant Pendant',
      time: '15 minutes ago',
      count: '4 pcs',
      image: 'https://i.pinimg.com/1200x/a2/fb/0d/a2fb0dd087a4a0810c4f574f28313a2d.jpg'
    },
     {
      name: 'Royal Spark Ring',
      time: '7 minutes ago',
      count: '40 pcs',
      image: 'https://i.pinimg.com/1200x/30/0c/9b/300c9be67a985a8a421266f2b856935a.jpg'
    },
  ];


  // Order Details
 orderDetails = [
    {
      id: '#9277227654',
      status: 'Delivered',
      message: 'Your Order has been delivered.',
      // New Color Mapping
      bgColor: '#ff9800',       // Orange Background (Delivered)
      textColor: '#333333',     // Text color (default dark)
      badgeBg: '#f0fdf4',       // Light Green Badge background
      badgeText: '#22c55e',     // Green Badge text
    },
    {
      id: '#9277227654',
      status: 'Shipped',
      message: 'Your Order has been Shipped.',
      // New Color Mapping
      bgColor: '#032B76',       // Dark Blue Background (Shipped)
      textColor: '#ffffff',     // Text color (white for contrast)
      badgeBg: '#e0f2fe',       // Light Blue Badge background
      badgeText: '#007bff',     // Blue Badge text
    },
    {
      id: '#9277227654',
      status: 'Canceled',
      message: 'Your Order has been Canceled.',
      // New Color Mapping
      bgColor: '#60a5fa',       // Medium Blue Background (Canceled)
      textColor: '#333333',     // Text color (default dark)
      badgeBg: '#fef2f2',       // Light Red Badge background
      badgeText: '#ef4444',     // Red Badge text
    },
    {
      id: '#9277227654',
      status: 'Returned',
      message: 'Your Order has been Canceled.',
      // New Color Mapping
      bgColor: '#a5d6ff',       // Very Light Blue Background (Returned)
      textColor: '#333333',     // Text color (default dark)
      badgeBg: '#fffbeb',       // Light Yellow Badge background
      badgeText: '#f59e0b',     // Amber/Yellow Badge text
    },
  ];
   // Add this method inside your AdminHomeComponent class in admin-home.component.ts
  trackById(index: number, item: any): string {
    return item.id; // Or a unique identifier if the ID is not unique across all items
  }
}
