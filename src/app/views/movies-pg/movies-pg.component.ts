import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { movies_API_URL } from '../../core/const/api-urls';
import { BaseProxyService } from '../../core/services/base-proxy.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription, catchError, map, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Movie } from './models/movie.model';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ErrorStateDirective } from './directives/error-state.directive';
import { ImageFallbackDirective } from './directives/image-fallback.directive';

@Component({
  selector: 'app-movies-pg',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    TruncatePipe,
    ErrorStateDirective,
    ImageFallbackDirective,
  ],
  templateUrl: './movies-pg.component.html',
  styleUrl: './movies-pg.component.scss',
})
export class MoviesPgComponent {
  baseProxySrv = inject(BaseProxyService);
  search = new FormControl('');
  movies!: Observable<any>;
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.fetchMovies();
    }
  }
  fetchMovies() {
    this.movies = this.baseProxySrv
      .get(movies_API_URL, { title: `${this.search.value}&amp` })
      .pipe(
        map((response: any) => {
          if (!response.results) {
            throw new Error('No results found');
          }
          return response.results;
        }),
        catchError(() => {
          return of([]);
        })
      );
  }
}
