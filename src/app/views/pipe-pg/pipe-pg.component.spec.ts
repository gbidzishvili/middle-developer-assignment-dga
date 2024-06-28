import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePgComponent } from './pipe-pg.component';

describe('PipePgComponent', () => {
  let component: PipePgComponent;
  let fixture: ComponentFixture<PipePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipePgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
