import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAppointmentsComponent } from './pat-appointments.component';

describe('AppointmentsComponent', () => {
  let component: PatAppointmentsComponent;
  let fixture: ComponentFixture<PatAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
