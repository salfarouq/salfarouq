import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WanafunziCreateComponent } from './wanafunzi-create/wanafunzi-create.component';
import { WanafunziEditComponent } from './wanafunzi-edit/wanafunzi-edit.component';
import { WanafunziListComponent } from './wanafunzi-list/wanafunzi-list.component';
import { WalimuCreateComponent } from './walimu-create/walimu-create.component';
import { WalimuListComponent } from './walimu-list/walimu-list.component';
const routes: Routes = [
 { path:'',pathMatch:'full',redirectTo:'create-mwanafunzi'},
 {path:'wanafunzi-create',component:WanafunziCreateComponent},
 {path:'wanafunzi-edit',component:WanafunziEditComponent},
 {path:'wanafunzi',component:WanafunziListComponent},
{path:'walimu-create',component:WalimuCreateComponent},
{path:'walimu',component:WalimuListComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
