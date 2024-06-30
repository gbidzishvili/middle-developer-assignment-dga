import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsPgComponent } from './views/forms-pg/forms-pg.component';
import { HeaderComponent } from './navigation/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsPgComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dga-assignment';
}
