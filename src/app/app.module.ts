import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WanafunziCreateComponent } from './wanafunzi-create/wanafunzi-create.component';
import { WanafunziEditComponent } from './wanafunzi-edit/wanafunzi-edit.component';
import { WanafunziListComponent } from './wanafunzi-list/wanafunzi-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { WalimuCreateComponent } from './walimu-create/walimu-create.component';
import { WalimuListComponent } from './walimu-list/walimu-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WanafunziCreateComponent,
    WanafunziEditComponent,
    WanafunziListComponent,
    WalimuCreateComponent,
    WalimuListComponent, 
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatSidenavModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
