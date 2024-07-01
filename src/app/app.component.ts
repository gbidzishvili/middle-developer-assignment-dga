import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsPgComponent } from './views/forms-pg/forms-pg.component';
import { HeaderComponent } from './navigation/components/header/header.component';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsPgComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dga-assignment';
  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/images/particles.json', null);
  }
}
