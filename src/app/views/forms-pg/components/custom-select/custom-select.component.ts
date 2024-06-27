import { Component, Input, input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomSelectComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomSelectComponent,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() increment!: number;
  quantity = 0;
  onChange = (quantity: number) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;
  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }
  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  validate(control: AbstractControl): { [key: string]: any } | null {
    const quantity = control.value;
    if (!quantity) {
      return { required: true };
    }
    return null;
  }
}
