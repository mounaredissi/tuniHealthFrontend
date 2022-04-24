import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatBookAppointmentComponent } from './book-appointment.component';

describe('BookAppointmentComponent', () => {
  let component: PatBookAppointmentComponent;
  let fixture: ComponentFixture<PatBookAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatBookAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatBookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
