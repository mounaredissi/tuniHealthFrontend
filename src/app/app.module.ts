import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule, MultiSelectModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TextBoxModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AddEditDoctorComponent } from './add-edit-doctor/add-edit-doctor.component';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { PreferenceComponent } from './preference/preference.component';
import { MainComponent } from './main/main.component';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { LoginComponent } from './components/login/login.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './Services/user.service';
import { SignupPatientComponent } from './components/signup-patient/signup-patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatBookAppointmentComponent } from './patient-interface/book-appointment/book-appointment.component';
import { PatAppointmentsComponent } from './patient-interface/pat-appointments/pat-appointments.component';
import { PatDoctorDetailsComponent } from './patient-interface/pat-doctor-details/pat-doctor-details.component';
import { PatDoctorsComponent } from './patient-interface/pat-doctors/pat-doctors.component';
import { PatientMainComponent } from './patient-interface/patient-main/patient-main.component';
@NgModule({
  declarations: [
    PatDoctorDetailsComponent,
    PatBookAppointmentComponent,
    PatAppointmentsComponent,
    PatDoctorsComponent,
    PatientMainComponent,
    AppComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    SignUpComponent,
    HomeComponent,
    BookAppointmentComponent,
    LoginComponent,
    PatientHomeComponent,
    SignupPatientComponent,
    MainDoctorComponent,
    AppComponent,
    AboutComponent,
    AddEditDoctorComponent,
    AddEditPatientComponent,
    CalendarComponent,
    DashboardComponent,
    DoctorDetailsComponent,
    DoctorAvailabilityComponent,
    DoctorsComponent,
    PatientsComponent,
    RecentActivityComponent,
    PreferenceComponent,
    MainComponent,
    MainDoctorComponent
  ],
  imports: [
     BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    RecurrenceEditorModule,
    DropDownListModule,
    MultiSelectModule,
    ComboBoxModule,
    CheckBoxModule,
    ButtonModule,
    SwitchModule,
    SplitButtonModule,
    RadioButtonModule,
    TreeViewModule,
    DatePickerModule,
    TimePickerModule,
    TextBoxModule,
    MaskedTextBoxModule,
    ListViewModule,
    SidebarModule,
    ChartModule,
    GridModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [CalendarComponent, { provide: APP_BASE_HREF, useValue: '/' }, Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
