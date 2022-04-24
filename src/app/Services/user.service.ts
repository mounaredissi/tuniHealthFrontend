import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';
import { Patient } from '../patient';
import { Consultation } from '../Consultation';
import { Medecin } from '../Medecin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({
    'No-Auth': 'True', 

  })
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData: any) {
    console.log(localStorage.getItem('con'));
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public getAllPatientsForUser(){
    return this.httpclient.get<Patient[]>(this.PATH_OF_API+'/findPatientsByMed/'+localStorage.getItem('con'))
  }
  public getAllConsultationByMed(){
    return this.httpclient.get<Consultation[]>(this.PATH_OF_API+'/findPatientsByIdMed/'+localStorage.getItem('con'))
  }
  public getAllMedecinById(){
    return this.httpclient.get<Medecin[]>(this.PATH_OF_API+'/findPatientsByIdMed/'+localStorage.getItem('con'))
  }
  public deleteConsultation(id:number){
    return this.httpclient.delete(this.PATH_OF_API+'/deleteCons/'+id) 
   }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }

  
    registerNewPatient(signupdatas: any): Observable<any> {
      console.log(signupdatas);
  
      return this.httpclient.post(this.PATH_OF_API + '/registerNewPatient', signupdatas, {
        headers: this.requestHeader,
      });
      }
  registerNewMedecin(signupdatas: any): Observable<any> {
    console.log(signupdatas);

    return this.httpclient.post(this.PATH_OF_API + '/registerNewMedecin', signupdatas, {
      headers: this.requestHeader,
    });
    }

  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: string | any[]): boolean |any {
    let isMatch = false ;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
