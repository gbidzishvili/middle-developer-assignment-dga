import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsPgComponent } from './views/forms-pg/forms-pg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsPgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dga-assignment';
}
