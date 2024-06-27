import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationsService {
  constructor() {}

  maxLength(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value.length > 20) {
      return { maxLengthError: true };
    }
    return null;
  }
}
