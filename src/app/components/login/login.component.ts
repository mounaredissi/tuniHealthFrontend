import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {

  }
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        localStorage.setItem('con',response.user.userName);
        const role = response.user.role[0].roleName;
        if (role === 'Patient') {
          this.router.navigate(['/app-patient-main']);
        } else {
          this.router.navigate(['/doctors-interface']);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 


 

}
