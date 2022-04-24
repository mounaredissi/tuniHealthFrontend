import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatDoctorsComponent } from './pat-doctors.component';

describe('PatDoctorsComponent', () => {
  let component: PatDoctorsComponent;
  let fixture: ComponentFixture<PatDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
