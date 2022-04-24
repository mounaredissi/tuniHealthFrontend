import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { AddEditDoctorComponent } from '../add-edit-doctor/add-edit-doctor.component';
import { DataService } from '../data.service';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { UserService } from '../Services/user.service';
import { Consultation } from '../Consultation';
import { Browser } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { DialogEditEventArgs, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  encapsulation: ViewEncapsulation.None,
   providers: [ToolbarService, EditService, PageService]
})
export class DoctorsComponent implements OnInit {

  public consultation:any ;
  datePipe: any;
  closeResult :string
  editForm:FormGroup;
  constructor(public dataService: DataService, private fb:FormBuilder,private router: Router, private userService :UserService,private modalService: NgbModal) {
    // this.doctorsData = this.filteredDoctors = this.dataService.getDoctorsData();
    // this.activeDoctorData = this.doctorsData[0];
    // this.specializationData = this.dataService.specialistData;
    this.userService.getAllConsultationByMed().subscribe(
      (res)=>{
        console.log("the result",res);
        console.log(localStorage.getItem('con'));   
       this.consultation=res;})
  }

  public ngOnInit(): void {
    this.userService.getAllConsultationByMed().subscribe(
      (res)=>{
        console.log("the result",res);
        console.log(localStorage.getItem('con'));   
       this.consultation=res;})
    this.editForm = this.fb.group({
      id: [''],
      Date: [''],
      //patName: [''],
      t_debut: [''],
      h: [''],
      t_fin: ['']
    } );

  }
  openEdit(targetModal, friend: Consultation) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: friend.id, 
      Date: friend.Date,
      //patName: friend.patients.patName,
      t_debut: friend.t_debut,
      t_fin: friend.t_fin,
      h: friend.h,

    });
  }
  // openEdit(targetModal, friend: Consultation) {
  //   this.modalService.open(targetModal, {
  //     backdrop: 'static',
  //     size: 'lg'
  //   });
  //   this.editForm.patchValue( {
  //     id: friend.id, 
  //     firstname: friend.firstname,
  //     lastname: friend.lastname,
  //     department: friend.department,
  //     email: friend.email,
  //     country: friend.country
  //   });
  // }
  deleteOnClick(id:any){
    console.log("hello")
    this.userService.deleteConsultation(id).subscribe(
      (res)=>{
        console.log("cestbon",res);
      }
    )

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  


}


