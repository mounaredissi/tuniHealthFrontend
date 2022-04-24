import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatDoctorDetailsComponent } from './pat-doctor-details.component';

describe('PatDoctorDetailsComponent', () => {
  let component: PatDoctorDetailsComponent;
  let fixture: ComponentFixture<PatDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatDoctorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
