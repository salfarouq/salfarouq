import { Component, OnInit } from '@angular/core';
import { WalimuListComponent } from 'src/app/walimu-list/walimu-list.component';
import { WanafunziListComponent } from 'src/app/wanafunzi-list/wanafunzi-list.component';

@Component({
  selector: 'app-studentv',
  templateUrl: './studentv.component.html',
  styleUrls: ['./studentv.component.css']
})
export class StudentvComponent implements OnInit {
  walimuListComponent: WalimuListComponent;
  wanafunziListComponent: WanafunziListComponent;
  mwalimu: any = [];
  mwanafunzi:any=[];
  constructor(walimuListComponent: WalimuListComponent, wanafunziListComponent: WanafunziListComponent) {
    this.walimuListComponent = walimuListComponent;
    this.wanafunziListComponent = wanafunziListComponent;
  }

  ngOnInit() {
    this.walimuListComponent.loadmwalimus();
    this.wanafunziListComponent.loadmwanafunzis();
  }
}
