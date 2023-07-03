import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WanafunziCreateComponent } from './wanafunzi-create/wanafunzi-create.component';
import { WanafunziEditComponent } from './wanafunzi-edit/wanafunzi-edit.component';
import { WanafunziListComponent } from './wanafunzi-list/wanafunzi-list.component';
import { WalimuCreateComponent } from './walimu-create/walimu-create.component';
import { WalimuListComponent } from './walimu-list/walimu-list.component';
import { HomeComponent } from './home/home.component';
import { WalimuEditComponent } from './walimu-edit/walimu-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentvComponent } from './viewer/studentv/studentv.component';


const routes: Routes = [
 
 { 
  path:'',pathMatch:'full',
 redirectTo:'home'},
 {path:'viewer',component:StudentvComponent},
{path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent},
 {
  path:'wanafunzi-create',
 component:WanafunziCreateComponent
},
{path:'register',component:RegisterComponent},
 {path:'wanafunzi-edit',component:WanafunziEditComponent},
 {path:'wanafunzi',component:WanafunziListComponent},
{path:'walimu-create',component:WalimuCreateComponent},
{path:'walimu',component:WalimuListComponent},
{path:'walimu-edit',component:WalimuEditComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
