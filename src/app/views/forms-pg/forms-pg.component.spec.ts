import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPgComponent } from './forms-pg.component';

describe('FormsPgComponent', () => {
  let component: FormsPgComponent;
  let fixture: ComponentFixture<FormsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
