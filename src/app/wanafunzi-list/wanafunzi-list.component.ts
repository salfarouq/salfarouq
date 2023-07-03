import { Component } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { WanafunziCreateComponent } from '../wanafunzi-create/wanafunzi-create.component';
import { WanafunziEditComponent } from '../wanafunzi-edit/wanafunzi-edit.component';
import { WalimuListComponent } from '../walimu-list/walimu-list.component';



@Component({
  selector: 'app-wanafunzi-list',
  templateUrl: './wanafunzi-list.component.html',
  styleUrls: ['./wanafunzi-list.component.css']
})
export class WanafunziListComponent{
  mwanafunzi: any = [];
  constructor(public restApi: RestApiService,public dialog:MatDialog) {}
  Opendialog(){
    let dialogRef = this.dialog.open(WanafunziCreateComponent, {
      height: '400px',
      width: '600px',
    }) 
  }
  Opendialog1(){
    let dialogRef = this.dialog.open(WanafunziEditComponent, {
      height: '400px',
      width: '600px',
    });
  }
  
  ngOnInit() {
    this.loadmwanafunzis();
    
  }
  // Get mwanafunzis list
  loadmwanafunzis() {
    return this.restApi.getmwanafunzis().subscribe((data: {}) => {
      this.mwanafunzi = data;
    });
  }
 
  // Delete mwanafunzi
  deletemwanafunzi(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deletemwanafunzi(id).subscribe((data) => {
        this.loadmwanafunzis();
      }); 
    }
  }
  

}



