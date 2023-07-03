import { Component } from '@angular/core';
import { WalimuCreateComponent } from '../walimu-create/walimu-create.component';
import { MatDialog } from '@angular/material/dialog';
import { RestApi2Service } from '../shared/rest-api2.service';
import { Walimu } from '../shared/walimu';
import { WanafunziListComponent } from '../wanafunzi-list/wanafunzi-list.component';
import { WalimuEditComponent } from '../walimu-edit/walimu-edit.component';

@Component({
  selector: 'app-walimu-list',
  templateUrl: './walimu-list.component.html',
  styleUrls: ['./walimu-list.component.css']
})
export class WalimuListComponent{
  mwalimu: any = [];
  constructor(public restApi: RestApi2Service,public dialog:MatDialog) {}
  Opendialog(){
    let dialogRef = this.dialog.open(WalimuCreateComponent, {
      height: '400px',
      width: '600px',
    });
    
  }
  ngOnInit() {
    this.loadmwalimus();
  }
  // Get mwalimus list
  loadmwalimus() {
    return this.restApi.getmwalimus().subscribe((data: {}) => {
      this.mwalimu = data;
    });
  }
  Opendialog1(){
    let dialogRef = this.dialog.open(WalimuEditComponent, {
      height: '400px',
      width: '600px',
    });
  }
  // Delete mwalimu
  deletemwalimu(id:any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deletemwalimu(id).subscribe((data) => {
        this.loadmwalimus();
      });
  }
  }
}