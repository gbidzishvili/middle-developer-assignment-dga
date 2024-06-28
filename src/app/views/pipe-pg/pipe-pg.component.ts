import { Component, OnInit } from '@angular/core';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@Component({
  selector: 'app-pipe-pg',
  standalone: true,
  imports: [CustomDatePipe],
  templateUrl: './pipe-pg.component.html',
  styleUrl: './pipe-pg.component.scss',
})
export class PipePgComponent implements OnInit {
  ngOnInit(): void {
    console.log('rame');
  }
}
