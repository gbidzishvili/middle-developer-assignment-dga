import { Pipe, PipeTransform } from '@angular/core';
import { format, isValid, parseISO } from 'date-fns';
@Pipe({
  name: 'customDate',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, dateFormat: string = 'HH:mm:ss MMM dd yyyy'): any {
    const date = parseISO(value);
    if (!isValid(date)) {
      return value;
    }
    return format(date, dateFormat);
  }
}
