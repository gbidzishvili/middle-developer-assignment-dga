import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-pg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-pg.component.html',
  styleUrl: './calendar-pg.component.scss',
})
export class CalendarPgComponent {
  currentMonth: number;
  currentYear: number;
  currentDay: number;
  daysInMonth: number[];
  firstDay: number;
  prevMonthDays: number[];
  nextMonthDays: number[];
  weekends: number[] = [0, 6];
  currentMonthName!: string;
  constructor() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.currentDay = today.getDate();
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
    this.firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.prevMonthDays = this.getPreviousMonthDays(this.firstDay);
    this.nextMonthDays = this.getNextMonthDays();
    this.currentMonthName = this.getMonthName(this.currentMonth);
  }
  getDaysInMonth(month: number, year: number): number[] {
    const date = new Date(year, month + 1, 0);
    const days: number[] = [];
    for (let i = 1; i <= date.getDate(); i++) {
      days.push(i);
    }
    return days;
  }

  getPreviousMonthDays(firstDay: number): number[] {
    const prevMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    const prevYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    const prevMonthDaysCount = new Date(prevYear, prevMonth + 1, 0).getDate();
    const prevMonthDays: number[] = [];

    for (
      let i = prevMonthDaysCount - firstDay + 1;
      i <= prevMonthDaysCount;
      i++
    ) {
      prevMonthDays.push(i);
    }

    return prevMonthDays;
  }

  getNextMonthDays(): number[] {
    const totalDaysDisplayed =
      this.prevMonthDays.length + this.daysInMonth.length;
    const nextMonthDaysCount =
      (totalDaysDisplayed > 35 ? 42 : 35) - totalDaysDisplayed;
    const nextMonthDays: number[] = [];

    for (let i = 1; i <= nextMonthDaysCount; i++) {
      nextMonthDays.push(i);
    }

    return nextMonthDays;
  }

  isWeekend(day: number, offset: number = 0): boolean {
    let dayOfWeek =
      offset < 0
        ? (this.firstDay + offset) % 7
        : (this.firstDay + day + offset - 1) % 7;
    return this.weekends.includes(dayOfWeek);
  }

  getMonthName(month: number): string {
    const date = new Date(this.currentYear, month, 1);
    return date.toLocaleString('default', { month: 'long' });
  }
}
