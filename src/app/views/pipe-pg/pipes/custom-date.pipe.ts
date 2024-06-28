import { Pipe, PipeTransform } from '@angular/core';
import { isDate, isValid, parseISO } from 'date-fns';
@Pipe({
  name: 'customDate',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any): any {
    const date = parseISO(value);
    if (isValid(date)) {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(date);
    }
    return value;
  }
}
