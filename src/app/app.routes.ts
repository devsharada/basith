import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { AboutUsComponent } from './Components/About/about-us/about-us.component';
import { HeroSectionComponent } from './Components/Products/hero-section/hero-section.component';
import { ProductComponent } from './Components/Product-details/product/product.component';
import { WishlistComponent } from './Components/Wishlist/wishlist/wishlist.component';
import { ContactComponent } from './Components/Contact-us/contact/contact.component';
import { AddressComponent } from './Components/User/address/address.component';
import { OrdersComponent } from './Components/User/orders/orders.component';
import { TrackOrderComponent } from './Components/User/track-order/track-order.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { UserCartComponent } from './Components/User/user-cart/user-cart.component';
import { UserWishlistComponent } from './Components/User/user-wishlist/user-wishlist.component';
import { AccountComponent } from './Components/User/account/account.component';
import { OrderDetailsComponent } from './Components/Checkout/order-details/order-details.component';
import { CartComponent } from './Components/Cart/cart/cart.component';
import { OrderPlacedDetailsComponent } from './Components/Checkout/order-placed-details/order-placed-details.component';
import { BlogsComponent } from './Components/Blogs/blogs/blogs.component';
import { BlogDetailComponent } from './Components/Blogs/blog-detail/blog-detail.component';
import { TermsAndConditionsComponent } from './Components/Core/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './Components/Core/privacy-policy/privacy-policy.component';
import { ShippingAndDeliveryComponent } from './Components/Core/shipping-and-delivery/shipping-and-delivery.component';
import { CancellationAndRefundComponent } from './Components/Core/cancellation-and-refund/cancellation-and-refund.component';
import { FaqComponent } from './Components/Core/faq/faq.component';
import { SizeGuideComponent } from './Components/Size-guide/size-guide/size-guide.component';
import { RingSizeGuideComponent } from './Components/Size-guide/ring-size-guide/ring-size-guide.component';
import { BangleSizeGuideComponent } from './Components/Size-guide/bangle-size-guide/bangle-size-guide.component';
import { AdminPanelSidebarComponent } from './Components/Admin-panel/admin-panel-sidebar/admin-panel-sidebar.component';
import { AdminLayoutComponent } from './Components/Admin-panel/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './Components/Admin-panel/admin-home/admin-home.component';
import { AdminSalesComponent } from './Components/Admin-panel/admin-sales/admin-sales.component';
import { AdminOrdersComponent } from './Components/Admin-panel/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/Admin-panel/admin-products/admin-products.component';
import { ProductCollectionOccasionComponent } from './Components/Admin-panel/admin-products/product-collection-occasion/product-collection-occasion.component';
import { ProductTrackingComponent } from './Components/Admin-panel/admin-products/product-tracking/product-tracking.component';
import { AddProductComponent } from './Components/Admin-panel/add-product/add-product.component';
import { ProductGridComponent } from './Components/Admin-panel/product-grid/product-grid.component';
import { ProductListComponent } from './Components/Admin-panel/product-list/product-list.component';
import { AdminMarketsComponent } from './Components/Admin-panel/admin-markets/admin-markets.component';
import { AdminAnalyticsComponent } from './Components/Admin-panel/admin-analytics/admin-analytics.component';
import { OnlineStorePagesComponent } from './Components/Admin-panel/online-store-pages/online-store-pages.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products', component: HeroSectionComponent },
  { path: 'product-details', component: ProductComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'user-account', component: AccountComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'address', component: AddressComponent },
  { path: 'user-cart', component: UserCartComponent },
  { path: 'user-wishlist', component: UserWishlistComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'track_order', component: TrackOrderComponent },
  { path: 'checkout', component: OrderDetailsComponent },
  { path: 'order-placed-details', component: OrderPlacedDetailsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'shipping-and-delivery', component: ShippingAndDeliveryComponent },
  { path: 'cancellation-and-refund', component: CancellationAndRefundComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: 'size-guide',
    component: SizeGuideComponent,
    children: [
      { path: '', redirectTo: 'ring', pathMatch: 'full' }, // default tab
      { path: 'ring', component: RingSizeGuideComponent },
      { path: 'bangle', component: BangleSizeGuideComponent },
    ],
  },
  {
    path: 'blogs',
    children: [
      { path: '', component: BlogsComponent },
      { path: 'blog-details/:slug', component: BlogDetailComponent }
    ]
  },
  // admin panel
  { path: 'admin-panel-sidebar', component: AdminPanelSidebarComponent },
  {
    path: 'admin', component: AdminLayoutComponent, data: { admin: true },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'sales', component: AdminSalesComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'product-collection-occasion', component: ProductCollectionOccasionComponent },
      { path: 'product-tracking', component: ProductTrackingComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'product-grid', component: ProductGridComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'markets', component: AdminMarketsComponent },
      { path: 'analytics', component: AdminAnalyticsComponent },
      { path: 'online-store-pages', component: OnlineStorePagesComponent },
    ],
  },
];
