import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs'; // <-- Import Subscription
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';
import { AuthComponent } from "../../Unauth/auth/auth.component";

// Interfaces from the advanced example
interface AccordionChildGroup {
  title: string;
  items: { label: string; path: string; catimage?: string; bannerimage?: string; goldcoin?: string }[];
  path?: string;
  iconImage?: string;
  isImageOnlyDesktop?: boolean;
  image?: {
    src: string;
    alt: string;
    link: string;
  };
}

interface MobileMenuItem {
  title: string;
  type: 'accordion' | 'link';
  path?: string;
  iconImage?: string;
  isImageOnlyDesktop?: boolean;
  children?: AccordionChildGroup[];
  image?: {
    src: string;
    alt: string;
    link: string;
  };
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, RouterLink, CartSidebarComponent, AuthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isDropdownOpen = false;
  showLoginModal = false;

  // FIX: Use '!' to assert definite assignment in ngOnInit
  private routerSubscription!: Subscription;

  // Inject ElementRef AND Router in the constructor
  constructor(private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events when the component initializes
    this.routerSubscription = this.router.events.subscribe(event => {
      // Check if the event is a successful navigation end
      if (event instanceof NavigationEnd) {
        // If a new page has loaded (new route), close the modal
        if (this.showLoginModal) {
          this.closeLogin();
        }
        // Also ensure the dropdown is closed
        if (this.isDropdownOpen) {
          this.isDropdownOpen = false; // Directly set to false is fine here
        }
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Toggle the dropdown menu
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Open login modal from dropdown
  openLoginFromDropdown(): void {
    this.isDropdownOpen = false; // close dropdown
    this.showLoginModal = true;  // open modal
  }

  // Open login modal from any other button
  openLogin(): void {
    this.showLoginModal = true;
    this.isDropdownOpen = false; // ensure dropdown is hidden
  }

  // Close the login modal
  closeLogin(): void {
    this.showLoginModal = false;
  }

  // HostListener to detect outside clicks for the dropdown
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isDropdownOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  showRateModal = false;
  showCartSidebar = false;
  mobileOpen = false;
  expandedIndex: number | null = null;
  expandedInnerIndex: number | null = null;
  hoverIndex: number | null = null;
  activeMegaTabIndex: number = 0;

  // *** NEW: State to track the currently active link in the main navigation bar ***
  // Set to 1 ('Collection') to match the image's appearance.
  activeLinkIndex: number | null = 1;

  openRateModal() {
    this.showRateModal = true;
  }
    cartItemCount: number = 0;


  openCartSidebar() {
    this.showCartSidebar = true;

  }

  closeCartSidebar() {
    this.showCartSidebar = false;
  }
  closeRateModal() {
    this.showRateModal = false;
  }
  showCalculator = false;

  toggleCalculator() {
    this.showCalculator = !this.showCalculator;
  }

  calculateValue() {
    // Your calculation logic here

    // Open the popup/modal after calculation
    this.showCalculator = true;
  }


  onMegaMenuLeave(): void {
    this.hoverIndex = null;
  }

  setActiveMegaTab(index: number) {
    if (!this.mobileMenu[this.hoverIndex!]?.children) return;
    this.activeMegaTabIndex = index;
  }

  onDesktopHover(index: number) {
    this.hoverIndex = index;
    this.activeMegaTabIndex = 0;
  }

  get desktopMenu() {
    return this.mobileMenu;
  }

  toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
    this.expandedInnerIndex = null;
  }

  toggleInner(index: number) {
    this.expandedInnerIndex = this.expandedInnerIndex === index ? null : index;
  }

  // --- COMPLETE DATA FOR NAVIGATION (FROM ADVANCED EXAMPLE) ---
  mobileMenu: MobileMenuItem[] = [
     {
      title: 'Home',
      // iconImage: 'assets/images/icon/scheme.png',
      type: 'link',
      path: '/home',
    },
    {
      title: 'All Jewellery',
      // iconImage: 'assets/images/icon/necklace.png',
      path: '/products',
      type: 'accordion',
      children: [
        {
          title: 'Category',
          items: [
            { label: 'Rings', path: '/products' },
            { label: 'Earrings', path: '#' },
            { label: 'Pendants', path: '#' },
            { label: 'Mangalsutra', path: '#' },
            { label: 'Chains', path: '#' },
            { label: 'Nosepin', path: '#' },
            { label: 'Bangles', path: '#' },
            { label: 'Necklace', path: '#' },
            { label: 'Bracelets', path: '#' },

          ],
        },
        {
          title: 'Collection',
          items: [
            { label: 'Trending', path: '#' },
            { label: 'Latest', path: '#' },
            { label: 'Bestseller', path: '#' },
            { label: 'Festive', path: '#' },
            { label: 'Bridal', path: '#' },
          ],
        },
        {
          title: 'Occasion',
          items: [
            { label: 'Daily Wear', path: '#' },
            { label: 'Office Wear', path: '#' },
            { label: 'Casual Wear', path: '#' },
            { label: 'Traditional Wear', path: '#' },
          ],
        },
        {
          title: 'Price',
          items: [
            { label: '< 25K', path: '#' },
            { label: '25K - 50K', path: '#' },
            { label: '50K - 75K', path: '#' },
            { label: '75K - 1L', path: '#' },
            { label: '1L & Above', path: '#' },
          ],
        },
        {
          title: 'Gender',
          items: [
            { label: 'Women', path: '#' },
            { label: 'Men', path: '#'},
            { label: 'Kids', path: '#' },
          ],
        },
      ],
      isImageOnlyDesktop: true,
           image: {
        src: 'assets/images/home/all-jewellery.jpg',
        alt: 'Necklace Promo',
        link: '',
      },

    },
     {
      title: 'Collection',
      // iconImage: 'assets/images/icon/collection.png',
      path: '/products',
      type: 'accordion',
      children: [


        {
          title: 'View All',
          items: [
            { label: 'Paithani Charm', path: '#' },
            { label: 'Rooh Touch', path: '#' },
            { label: 'Moderna Saaj', path: '#' },
            { label: 'Peshwai Pride', path: '#' },
            { label: 'Everyday Bloom', path: '#' },
             { label: 'Joy Of Dressing', path: '#' },

          ],
        },



        // {
        //   title: 'Collection',
        //   items: [
        //     { label: 'Trending', path: '#', catimage: 'assets/images/icon/trending.png' },
        //     { label: 'Latest', path: '#', catimage: 'assets/images/icon/latest.png' },
        //     { label: 'Bestseller', path: '#', catimage: 'assets/images/icon/bestseller.png' },
        //     { label: 'Festive', path: '#', catimage: 'assets/images/icon/festive.png' },
        //     { label: 'Bridal', path: '#', catimage: 'assets/images/icon/couple-rings.png' },
        //   ],
        // },
        // {
        //   title: 'Price',
        //   items: [
        //     { label: '< 25K', path: '#', catimage: 'assets/images/icon/rupee.png' },
        //     { label: '25K - 50K', path: '#', catimage: 'assets/images/icon/rupee.png' },
        //     { label: '50K - 75K', path: '#', catimage: 'assets/images/icon/rupee.png' },
        //     { label: '75K - 1L', path: '#', catimage: 'assets/images/icon/rupee.png' },
        //     { label: '1L & Above', path: '#', catimage: 'assets/images/icon/rupee.png' },
        //   ],
        // },
        //  {
        //   title: 'Gender',
        //   items: [
        //     { label: 'Women', path: '#''},
        //     { label: 'Men', path: '#'},
        //     { label: 'Kids', path: '#' },
        //   ],
        // },


      ],
      isImageOnlyDesktop: true,
           image: {
        src: 'assets/images/home/collection.jpg',
        alt: 'Necklace Promo',
        link: '',
      },

    },

    {
      title: 'Gold',
      // iconImage: 'assets/images/icon/gold.png',
      path: '/products',
      type: 'accordion',
      children: [
        {
          title: 'Category',
          items: [
            { label: 'Rings', path: '#' },
            { label: 'Earrings', path: '#' },
            { label: 'Pendants', path: '#' },
            { label: 'Mangalsutra', path: '#' },
            { label: 'Chains', path: '#' },
            { label: 'Nosepin', path: '#' },
            { label: 'Bangles', path: '#' },
            { label: 'Necklace', path: '#' },
            { label: 'Bracelets', path: '#' },
            { label: 'Kadas', path: '#' },
          ],
        },
        {
          title: 'Collection',
          items: [
            { label: 'Trending', path: '#' },
            { label: 'Latest', path: '#' },
            { label: 'Bestseller', path: '#' },
            { label: 'Festive', path: '#' },
            { label: 'Bridal', path: '#' },
          ],
        },
        {
          title: 'Occasion',
          items: [
            { label: 'Daily Wear', path: '#' },
            { label: 'Office Wear', path: '#' },
            { label: 'Casual Wear', path: '#' },
            { label: 'Traditional Wear', path: '#' },
          ],
        },
         {
          title: 'Price',
          items: [
            { label: '< 25K', path: '#',  },
            { label: '25K - 50K', path: '#',  },
            { label: '50K - 75K', path: '#',  },
            { label: '75K - 1L', path: '#' },
            { label: '1L & Above', path: '#' },
          ],
        },
        {
          title: 'Gold Coin',
          items: [
            { label: '1 Gram', path: '' },
            { label: '2 Gram', path: ''},
            { label: '5 Gram', path: ''},
            { label: '10 Gram', path: '' },
            { label: '20 Gram', path: '' },
            { label: '50 Gram', path: '' },
            { label: '100 Gram', path: '' },
          ],
        },
        {
          title: 'Gender',
          items: [
            { label: 'Women', path: '#' },
            { label: 'Men', path: '#'},
            { label: 'Kids', path: '#' },
          ],
        },
      ],
      isImageOnlyDesktop: true,
           image: {
        src: 'assets/images/home/gold.jpg',
        alt: 'Necklace Promo',
        link: '',
      },

    },

    {
      title: 'Gold Coin',
      // iconImage: 'assets/images/icon/earring.png',
      // path: '',
      type: 'accordion',
      children: [
        {
          title: 'Category',
          items: [
            { label: 'All Earring', path: '#' },
            { label: 'Studs', path: '#' },
            { label: 'Hoops', path: '#' },
            { label: 'Danglers', path: '#' },
            { label: 'Huggies', path: '#' },
            { label: 'Drops', path: '#' },
            { label: 'Jhumka', path: '#' },
            { label: 'Ear Cuffs', path: '#' },
          ],
        },
       {
          title: 'Collection',
          items: [
            { label: 'Trending', path: '#' },
            { label: 'Latest', path: '#' },
            { label: 'Bestseller', path: '#' },
            { label: 'Festive', path: '#' },
            { label: 'Bridal', path: '#' },
          ],
        },
         {
          title: 'Occasion',
          items: [
            { label: 'Daily Wear', path: '#' },
            { label: 'Office Wear', path: '#' },
            { label: 'Casual Wear', path: '#' },
            { label: 'Traditional Wear', path: '#' },
          ],
        },
        {
          title: 'Price',
          items: [
            { label: '< 25K', path: '#' },
            { label: '25K - 50K', path: '#' },
            { label: '50K - 75K', path: '#' },
            { label: '75K - 1L', path: '#' },
            { label: '1L & Above', path: '#' },
          ],
        },
        {
          title: 'Gender',
          items: [
            { label: 'Women', path: '#' },
            { label: 'Men', path: '#'},
            { label: 'Kids', path: '#' },
          ],
        },
      ],
      isImageOnlyDesktop: true,
            image: {
        src: 'assets/images/home/gold-coin.jpg',
        alt: 'Necklace Promo',
        link: '',
      },

    },

    {
      title: 'Scheme',
      // iconImage: 'assets/images/icon/scheme.png',
      type: 'link',
      path: '',
    },
    {
      title: 'About Us',
      // iconImage: 'assets/images/icon/order.png',
      type: 'link',
      path: '/about-us',
    },
  ];
}
