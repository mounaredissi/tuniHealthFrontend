import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public targetElement: HTMLElement;
  constructor(private userService: UserService,private formbuilder: FormBuilder) { }
  forms!: FormGroup;
 
  ngOnInit(): void {
    this.forms = new FormGroup( {
      medName:new FormControl(['']) ,
      medFirstName: new FormControl(['']),
      medLastName:new FormControl( ['']),
      medPassword:new FormControl( ['']),
      medSpecialite:new FormControl([''])

    })
  }
  registerNewMedecin() {
    this.userService.registerNewMedecin(this.forms.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
