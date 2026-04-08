import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, NavigationStart } from '@angular/router';

interface Country {
  name: string;
  code: string;
  dial_code: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // ------------------------
  // Outputs
  // ------------------------
  @Output() closeLoginModal = new EventEmitter<void>();

  // ------------------------
  // View State (Updated to include 'signup')
  // ------------------------
  public currentView: 'login' | 'signup' | 'otp' = 'login';

  // A variable to track the view *before* OTP, to navigate back correctly
  private previousView: 'login' | 'signup' = 'login';

  // ------------------------
  // Layout Rotation (kept for completeness)
  // ------------------------
  public activeLayout = 1;
  private layoutInterval: any;

  // ------------------------
  // Form and State
  // ------------------------
  public mobileNumber = '';
  public fullName = ''; // Added for signup form
  public otpCode = ''; // Added for OTP form
  public showMobileNumberError = false;
  public isDropdownOpen = false;

  // ------------------------
  // Country Data (kept for completeness)
  // ------------------------
  public countries: Country[] = [
    { name: 'India', code: 'in', dial_code: '+91' },
    { name: 'United States', code: 'us', dial_code: '+1' },
    { name: 'United Kingdom', code: 'gb', dial_code: '+44' },
    { name: 'Australia', code: 'au', dial_code: '+61' },
    { name: 'Canada', code: 'ca', dial_code: '+1' },
  ];

  public selectedCountry: Country = this.countries[0]; // Default: India

  constructor(private elementRef: ElementRef, private router: Router) {}

  // ------------------------
  // Lifecycle Hooks
  // ------------------------
  ngOnInit(): void {
    this.startLayoutRotation();

    // Close login modal automatically when navigation starts
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.onClose();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopLayoutRotation();
  }

  // ------------------------
  // Layout Rotation
  // ------------------------
  private startLayoutRotation(): void {
    this.layoutInterval = setInterval(() => {
      this.activeLayout = (this.activeLayout % 3) + 1;
    }, 3000);
  }

  private stopLayoutRotation(): void {
    if (this.layoutInterval) {
      clearInterval(this.layoutInterval);
    }
  }

  // ------------------------
  // Dropdown Control (kept for completeness)
  // ------------------------
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.isDropdownOpen = false;
  }

  // ------------------------
  // View Switching
  // ------------------------
  switchToSignup(): void {
    this.currentView = 'signup';
    this.mobileNumber = ''; // Clear input on switch
  }

  switchToLogin(): void {
    this.currentView = 'login';
    this.mobileNumber = ''; // Clear input on switch
  }

  // ------------------------
  // Request OTP (Used by both Login and Signup)
  // ------------------------
  onRequestOtp(): void {
    if (this.validateMobileNumber()) {
      this.showMobileNumberError = false;
      console.log(
        `Requesting OTP for ${this.currentView} on:`,
        this.selectedCountry.dial_code + this.mobileNumber
      );
      this.previousView = this.currentView === 'login' ? 'login' : 'signup'; // Save current view
      this.currentView = 'otp'; // Switch to OTP view
      this.otpCode = ''; // Clear previous OTP
    } else {
      this.showMobileNumberError = true;
    }
  }

  // ------------------------
  // OTP Verification
  // ------------------------
  onVerifyOtp(): void {
    console.log('Verifying OTP:', this.otpCode);
    // Add actual OTP verification logic here...
    this.onClose();
  }

  private validateMobileNumber(): boolean {
    const trimmed = this.mobileNumber.trim();
    // Simplified validation: 6+ digits
    return trimmed.length >= 6 && /^\d+$/.test(trimmed);
  }

  // ------------------------
  // Close Modal
  // ------------------------
  onClose(): void {
    this.closeLoginModal.emit();
  }

  // ------------------------
  // Back to Login/Signup View (from OTP)
  // ------------------------
  handleBackToPreviousView(): void {
    this.currentView = this.previousView; // Go back to the view before OTP
    this.mobileNumber = ''; // Clear phone number for security
  }
}
