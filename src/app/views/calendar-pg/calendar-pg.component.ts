import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-pg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-pg.component.html',
  styleUrl: './calendar-pg.component.scss',
})
export class CalendarPgComponent implements OnInit {
  currentMonth!: number;
  currentYear!: number;
  currentDay!: number;
  daysInMonth!: number[];
  firstDay!: number;
  weekends: number[] = [0, 6];
  constructor() {
    const today = new Date();

    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.currentDay = today.getDate();
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }
  ngOnInit(): void {}

  getDaysInMonth(month: number, year: number): number[] {
    const date = new Date(year, month + 1, 0);
    const days: number[] = [];
    for (let i = 1; i <= date.getDate(); i++) {
      console.log(date.getDate());
      days.push(i);
    }
    return days;
  }
  isWeekend(day: number): boolean {
    const dayOfWeek = (this.firstDay + day - 1) % 7;
    return this.weekends.includes(dayOfWeek);
  }
}
