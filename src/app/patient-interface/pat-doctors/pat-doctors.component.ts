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
import { CommonService } from 'src/app/Services/CommonService';
/////////////////////////////////
@Component({
  selector: 'app-pat-doctors',
  templateUrl: './pat-doctors.component.html',
  styleUrls: ['./pat-doctors.component.scss']
})
export class PatDoctorsComponent implements OnInit {
  selectedValue: any;
  @ViewChild('specializationObj') specializationObj: DropDownListComponent;
  @ViewChild('specialistItemObj') specialistItemObj: any;
  medecin: Medecin[] = [];
public medecinsdata: any;
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
mySelect = '2';
data = [
  {
    id:1,
    name: 'Dermatologie',
  },
  {
    id:2,
    name: "Pédiatrie"},
    {id:3,name:"Psychiatrie"},
    {id:4,name:'Gastro-entérologie'},
    {id:5,name:"Pneumologie"},
    {id:6,name:'Neurologie'},
    {id:7,name:"Cardiologie"},
    {id:8,name:"Endocrinologie"}

  ]

constructor(public dataService: DataService,private userService: UserService,private commonService: CommonService) {
  this.doctorsData = this.filteredDoctors = this.dataService.getDoctorsData();
  this.activeDoctorData = this.doctorsData[0];
  this.specializationData = this.dataService.specialistData;

           

  this.editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog'
  };

}
selectChange() {
  console.log(this.selectedValue)
  this.selectedValue = this.commonService.getDropDownText(this.mySelect, this.data)[0].name;
  this.userService.getDoctorsBySpec(getStringValue(this.selectedValue)).subscribe(
    (res)=>{
      console.log("the result",res);
      console.log(localStorage.getItem('con')); 
       
      
        this.medecindata=res})
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



function getStringValue(value: any): string {
  return value.toString();
}








function getDoctorsBySpec() {
  throw new Error('Function not implemented.');
}

