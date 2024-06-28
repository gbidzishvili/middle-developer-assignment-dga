import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComparisonPgComponent } from './string-comparison-pg.component';

describe('StringComparisonPgComponent', () => {
  let component: StringComparisonPgComponent;
  let fixture: ComponentFixture<StringComparisonPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringComparisonPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringComparisonPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
