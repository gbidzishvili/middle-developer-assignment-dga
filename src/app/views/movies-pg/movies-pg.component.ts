import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movies-pg',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatIconModule, MatCardModule],
  templateUrl: './movies-pg.component.html',
  styleUrl: './movies-pg.component.scss',
})
export class MoviesPgComponent {
  requestURL = `https://online-movie-database.p.rapidapi.com/title/v2/
  find?title=starwars&amp;
  limit=20&amp;
  paginationKey=0&amp;
  sortArg=moviemeter%2Casc`;
}
