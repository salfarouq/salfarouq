import { Component } from '@angular/core';
import { RestApi2Service } from '../shared/rest-api2.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-walimu-edit',
  templateUrl: './walimu-edit.component.html',
  styleUrls: ['./walimu-edit.component.css']
})
export class WalimuEditComponent {
  id = this.actRoute.snapshot.params['id'];
  mwalimuData: any = {};
  constructor(
    public restApi: RestApi2Service,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getMwalimu(this.id).subscribe((data: {}) => {
      this.mwalimuData = data;
    })
  }
  // Update mwalimu data
  updatemwalimus() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateMwalimu(this.id, this.mwalimuData).subscribe(data => {
        this.router.navigate(['/mwalimu'])
      })
    }
  }
}
