import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationsService {
  maxLengthValidator(maxLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value && control.value.length > maxLength) {
        return {
          maxLengthError: {
            maxLength: maxLength,
            actualLength: control.value.length,
          },
        };
      }
      return null;
    };
  }

  noNumericCharsValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const hasNumbers = /\d/.test(control.value);
    return hasNumbers ? { noNumbersError: true } : null;
  }
  urlPatternValidator(control: AbstractControl): { [key: string]: any } | null {
    const urlPattern = /^https?:\/\/[a-zA-Z\-]+(\.[a-zA-Z]{2,5})+$/;
    const isValid = urlPattern.test(control.value);
    return isValid ? null : { urlPatternError: true };
  }
}
