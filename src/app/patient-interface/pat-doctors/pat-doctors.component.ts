import { Component, OnInit } from '@angular/core';
import {  ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
//import { AddEditDoctorComponent } from '../../add-edit-doctor/add-edit-doctor.component';
import { DataService } from '../../data.service';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { PatDoctorDetailsComponent } from '../pat-doctor-details/pat-doctor-details.component';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

//////////////////////////////////

import { UserService } from '../../Services/user.service';
import { EditService, PageService, EditSettingsModel, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { Medecin } from 'src/app/Medecin';
/////////////////////////////////
@Component({
  selector: 'app-pat-doctors',
  templateUrl: './pat-doctors.component.html',
  styleUrls: ['./pat-doctors.component.scss']
})
export class PatDoctorsComponent implements OnInit {

  @ViewChild('specializationObj') specializationObj: DropDownListComponent;
  @ViewChild('specialistItemObj') specialistItemObj: any;
  medecin: Medecin[] = [];
public medecinsdata: Medecin[];
public medecindata:Medecin[] = [] ;
public doctorsData: Record<string, any>[];
public activeDoctorData: Record<string, any>;
public filteredDoctors: Record<string, any>[];
public specializationData: Record<string, any>[];
public fields: Record<string, any> = { text: 'Text', value: 'Id' };
public selectedDepartmentId: string;
public tooltipObj: Tooltip;
public editSettings: EditSettingsModel;
forms!: FormGroup;


constructor(public dataService: DataService,private userService: UserService) {
  this.doctorsData = this.filteredDoctors = this.dataService.getDoctorsData();
  this.activeDoctorData = this.doctorsData[0];
  this.specializationData = this.dataService.specialistData;
  this.userService.getAllDoctors().subscribe(
    (res)=>{
      console.log("the result",res);
      console.log(localStorage.getItem('con')); 
       
      for(var i=0;i<res.length;i++){
        this.medecindata.push(res[i]);}})
           
    // this.patientdata.concat(res);
     //this.json = res;
    // this.dataSource.data=res;

          
  //this.activePatientData = this.filteredPatients;
  console.log("khra ala rasek",this.medecindata)
  this.editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog'
  };
  /*this.userService.getDoctorsBySpec(this.forms.value.medSpecialite).subscribe(
    (res)=>{
      console.log("the result",res);
      console.log(localStorage.getItem('con')); 
       
      for(var i=0;i<res.length;i++){
        this.medecinsdata.push(res[i]);}})
           
    // this.patientdata.concat(res);
     //this.json = res;
    // this.dataSource.data=res;

          
  //this.activePatientData = this.filteredPatients;
  console.log("khra ala rasek",this.medecinsdata)
  this.editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog'
  };*/
}

public ngOnInit(): void {
  this.dataService.updateActiveItem('pat-doctor');
  this.tooltipObj = new Tooltip({
    height: '30px',
    width: '76px',
    position: 'RightTop',
    offsetX: -10,
    showTipPointer: false,
    target: '.availability',
    beforeOpen: (args: TooltipEventArgs) => {
      args.element.querySelector('.e-tip-content').textContent =
        args.target.classList[1].charAt(0).toUpperCase() + args.target.classList[1].slice(1);
    }
  });
  if (this.specialistItemObj) {
    this.tooltipObj.appendTo(this.specialistItemObj.nativeElement);
  }
}

public getColor(args: Record<string, string>): string {
  return args.Color;
}

public onSpecializationChange(args?: Record<string, any>): void {
  /*let filteredData: Record<string, any>[];
  if (args && args.value) {
    this.selectedDepartmentId = args ? args.itemData.DepartmentId : this.selectedDepartmentId;
    filteredData = this.doctorsData.filter((item: any) => item.DepartmentId === this.selectedDepartmentId);
  } else {
    this.selectedDepartmentId = null;
    filteredData = this.doctorsData;
  }
  this.filteredDoctors = filteredData;*/
  this.userService.getDoctorsBySpec(this.forms.value.medSpecialite).subscribe(
    (res)=>{
      console.log("the result",res);
      console.log(localStorage.getItem('con')); 
       
      for(var i=0;i<res.length;i++){
        this.medecinsdata.push(res[i]);}})
        this.filteredDoctors=this.medecinsdata;
        
  //getDoctorsBySpec();
}

public onSpecialistClick(args: Record<string, any>): void {
  this.tooltipObj.close();
  const specialistId: string = args.currentTarget.querySelector('.specialist-item').id.split('_')[1];
  const filteredData: Record<string, any>[] = this.doctorsData.filter((item: any) => item.Id === parseInt(specialistId as string, 10));
  this.dataService.setActiveDoctorData(filteredData[0]);
  //this.router.navigateByUrl('/app-pat-doctor-details/' + specialistId);
}

public updateDoctors(): void {
  this.doctorsData = this.dataService.getDoctorsData();
  if (this.selectedDepartmentId) {
    this.filteredDoctors = this.doctorsData.filter((item: any) => item.DepartmentId === this.selectedDepartmentId);
  }
}

public getEducation(text: string): string {
  return text.toUpperCase();
}
}












function getDoctorsBySpec() {
  throw new Error('Function not implemented.');
}

