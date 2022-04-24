import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css'],
  template: `<ejs-datepicker format='yyyy-MM-dd' placeholder='Enter date'
    [value]=dateValue></ejs-datepicker>`
})
export class SignupPatientComponent implements OnInit {
  @ViewChild('ejDatePicker') ejDatePicker: DatePickerComponent;

  public targetElement: HTMLElement;
  public placeholder: String = 'Date of Birth';
  constructor(private userService: UserService,private formbuilder: FormBuilder) { }
  form!: FormGroup;
  public format: string = "yyyy-MM-dd";
  ngOnInit(): void {
    this.form = new FormGroup( {
      patName:new FormControl(['']) ,
      patFirstName: new FormControl(['']),
      patLastName:new FormControl( ['']),
      patPassword:new FormControl( ['']),
      patsexe: new FormControl(['']),
      date_naiss: new FormControl(['']),    
      patBlood:new FormControl([''])

    })
  }
  registerNewPatient() {
    this.userService.registerNewPatient(this.form.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
