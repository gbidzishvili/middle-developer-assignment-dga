import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPgComponent } from './movies-pg.component';

describe('MoviesPgComponent', () => {
  let component: MoviesPgComponent;
  let fixture: ComponentFixture<MoviesPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
