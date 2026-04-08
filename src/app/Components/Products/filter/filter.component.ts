// filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterOption {
  label: string;
  value: string;
  checked?: boolean;
}

export interface FilterSection {
  title: string;
  type: 'checkbox' | 'range';
  options?: FilterOption[];
  minValue: number;
  maxValue: number;
  minLimit?: number;
  maxLimit?: number;
}

@Component({
  selector: 'app-filter',
  imports: [NgFor, NgIf, NgClass, NgStyle, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() showFilters = false;
  @Input() filters: FilterSection[] = [];
  @Output() applyFilters = new EventEmitter<any>();
  @Output() closePanel = new EventEmitter<void>();
  @Output() filterChanged = new EventEmitter<any>();

  openSections: Record<string, boolean> = {};

  toggleSection(title: string) {
    this.openSections[title] = !this.openSections[title];
  }

  onRangeChange(section: FilterSection, handle: 'min' | 'max') {
    if (handle === 'min' && section.minValue > section.maxValue)
      section.minValue = section.maxValue;
    if (handle === 'max' && section.maxValue < section.minValue)
      section.maxValue = section.minValue;
  }

  onApply() {
    const selected: Record<string, any> = {};
    this.filters.forEach((f) => {
      if (f.type === 'checkbox' && f.options) {
        selected[f.title] = f.options
          .filter((o) => o.checked)
          .map((o) => o.value);
      } else if (f.type === 'range') {
        selected[f.title] = { min: f.minValue, max: f.maxValue };
      }
    });
    this.applyFilters.emit(selected);
    this.closePanel.emit();
  }

onCheckboxChange(sectionTitle: string, option: FilterOption) {
  console.log('Checkbox changed:', sectionTitle, option); // <--- Add this
  this.filterChanged.emit({
    section: sectionTitle,
    value: option.value,
    label: option.label,
    checked: option.checked
  });
}


  closeFilters() {
    this.closePanel.emit();
  }
}
