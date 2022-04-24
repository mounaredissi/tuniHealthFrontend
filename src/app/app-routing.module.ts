import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { PreferenceComponent } from './preference/preference.component';
import { AboutComponent } from './about/about.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomeComponent } from './components/home/home.component';
import { SignupPatientComponent } from './components/signup-patient/signup-patient.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { LoginComponent } from './components/login/login.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { PatDoctorsComponent } from './patient-interface/pat-doctors/pat-doctors.component';
import { PatBookAppointmentComponent } from './patient-interface/book-appointment/book-appointment.component';
import { PatAppointmentsComponent } from './patient-interface/pat-appointments/pat-appointments.component';
import { PatDoctorDetailsComponent } from './patient-interface/pat-doctor-details/pat-doctor-details.component';
import { PatientMainComponent } from './patient-interface/patient-main/patient-main.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'sign-up', component: SignUpComponent },
  {path:'sign-up-patient',component:SignupPatientComponent},
  {path:'bookAppointment',component:BookAppointmentComponent},
  {path:'login',component:LoginComponent},
  { path: 'app-patient-main', component: PatientMainComponent,children: [
    { path: 'app-pat-book-appointment', component: PatBookAppointmentComponent},
    { path: 'app-pat-appointments', component: PatAppointmentsComponent },
    { path: 'app-pat-doctor-details/:id', component: PatDoctorDetailsComponent },
    { path: 'app-pat-doctors', component: PatDoctorsComponent}]},
 
  {path: 'doctors-interface',
  component: MainDoctorComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'patients',
    component: PatientsComponent
  },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'preference', component: PreferenceComponent },
  { path: 'about', component: AboutComponent },


]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
