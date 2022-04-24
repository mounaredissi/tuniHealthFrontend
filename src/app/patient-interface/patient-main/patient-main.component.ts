import { Component, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.scss']
})
export class PatientMainComponent implements AfterViewInit  {
  @ViewChild('sideBar')
  public sideBar: SidebarComponent;
  public showBackdrop = false;
  public closeOnDocumentClick = false;
  constructor() { document.body.classList.add('patient-page');
  if (Browser.isDevice) {
    this.showBackdrop = true;
    this.closeOnDocumentClick = true;
  }}

  public ngAfterViewInit(): void {
    if (Browser.isDevice) {
      document.querySelector('.planner-header').classList.add('device-header');
      document.querySelector('.planner-wrapper').classList.add('device-wrapper');
    }
  }

  public btnClick(): void {
    this.sideBar.show();
  }

  public onItemClick(args: any): void {
    if (Browser.isDevice) {
      this.sideBar.hide();
    }
    const elements: HTMLElement[] = args.currentTarget.parentElement.querySelectorAll('.active-item');
    elements.forEach(element => {
      if (element.classList.contains('active-item')) { element.classList.remove('active-item'); }
    });
    args.currentTarget.classList.add('active-item');
  }
}







