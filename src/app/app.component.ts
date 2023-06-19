import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarkazTahfidh';
  opened=false;
 name= new FormControl('');
 updateName() {
  this.name.setValue('Nancy');
}

}
