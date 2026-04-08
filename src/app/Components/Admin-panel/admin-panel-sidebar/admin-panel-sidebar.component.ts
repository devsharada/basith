import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-admin-panel-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-panel-sidebar.component.html',
})
export class AdminPanelSidebarComponent {
  openMenu: 'products' | null = null;

  // Base path for all child routes in AdminLayoutComponent
  private readonly ADMIN_LAYOUT_BASE_PATH = '/admin';

  constructor(private router: Router) {
    // Keep submenu open on page reload or route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.openMenu = this.getCurrentParentMenu();
      });
  }

  // Toggle submenu open/close
  toggleSubmenu(menuName: 'products') {
    // Corrected check to ensure it doesn't close if a sub-route is active
    if (this.openMenu === menuName && !this.router.url.startsWith(this.ADMIN_LAYOUT_BASE_PATH + '/product_')) {
      this.openMenu = null;
    } else {
      this.openMenu = menuName;
    }
  }

  // Route active check (for direct links)
  isRouteActive(route: string): boolean {
    // The route argument should now be the full absolute path, e.g., /admin/home
    return this.router.url.startsWith(route);
  }

  // Check if parent (like Product) should stay active (for grouped links)
  isMenuActive(parentPath: string): boolean {
    // parentPath is expected to be the direct parent link, e.g., /admin/products
    // It should be active if the direct parent or any sub-route starts with the sub-path prefix
    return (
      this.router.url.startsWith(parentPath) ||
      this.router.url.startsWith(this.ADMIN_LAYOUT_BASE_PATH + '/product_')
    );
  }

  // When clicking on Product menu
  onProductsClick() {
    this.toggleSubmenu('products');
    const productsPath = this.ADMIN_LAYOUT_BASE_PATH + '/products';

    // Navigate to /admin/products if not already on a product-related route
    if (
      !this.router.url.startsWith(productsPath) &&
      !this.router.url.startsWith(this.ADMIN_LAYOUT_BASE_PATH + '/product_')
    ) {
      this.router.navigate([productsPath]);
    }
  }

  // Keep correct menu open based on route
  private getCurrentParentMenu(): 'products' | null {
    const url = this.router.url;
    // Check for parent link or any sub-link prefix
    if (url.startsWith(this.ADMIN_LAYOUT_BASE_PATH + '/products') || url.startsWith(this.ADMIN_LAYOUT_BASE_PATH + '/product_'))
      return 'products';
    return null;
  }
   isSidebarOpen: boolean = false;

  // 2. Toggles the sidebar when the hamburger button is clicked
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // 3. Closes the sidebar, typically called after a navigation click on a link
  closeSidebar() {
    // Check if the current view is likely mobile/tablet
    // You can use a window.innerWidth check here if you need more precision,
    // but simply closing the sidebar when it's open works fine for this drawer pattern.
    if (this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }
}
