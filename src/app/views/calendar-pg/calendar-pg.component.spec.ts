import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPgComponent } from './calendar-pg.component';

describe('CalendarPgComponent', () => {
  let component: CalendarPgComponent;
  let fixture: ComponentFixture<CalendarPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
