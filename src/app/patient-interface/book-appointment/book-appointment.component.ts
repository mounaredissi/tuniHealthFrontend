import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
  template: `<ejs-datepicker format='yyyy-MM-dd' placeholder='Enter date'
  [value]=dateValue></ejs-datepicker>`
})
export class PatBookAppointmentComponent implements OnInit {
  public format: string = "yyyy-MM-dd";
  public med: any=[]=[] ;
  public placeholder: String = 'Date ';
  public st:string= localStorage.getItem('con');
  constructor(private userService: UserService,private formbuilder: FormBuilder) { }
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup( {
      // patient:new FormControl([localStorage.getItem('con')]) ,
      h: new FormControl(['']),
      date:new FormControl( ['']),
      // medecin:new FormControl({medName: ''}),
      medName:new FormControl(''),
    })
  }
  registerNewAppointment() {
    console.log(this.form.value);
    this.userService.RegisterNewAppointment({
      // ...this.form.value,
      h: Number(this.form.value.h),
      date: this.form.value.date,
      patient: {
        patName: localStorage.getItem('con')
      },
      medecin: {
        medName: this.form.value.medName
      }
    }).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
