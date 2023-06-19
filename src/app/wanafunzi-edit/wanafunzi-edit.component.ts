import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-wanafunzi-edit',
  templateUrl: './wanafunzi-edit.component.html',
  styleUrls: ['./wanafunzi-edit.component.css']
})
export class WanafunziEditComponent {
  id = this.actRoute.snapshot.params['id'];
  mwanafunziData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getmwanafunzi(this.id).subscribe((data: {}) => {
      this.mwanafunziData = data;
    })
  }
  // Update mwanafunzi data
  updatemwanafunzi() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updatemwanafunzi(this.id, this.mwanafunziData).subscribe(data => {
        this.router.navigate(['/mwanafunzis'])
      })
    }
  }
}
