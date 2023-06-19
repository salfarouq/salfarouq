import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-wanafunzi-create',
  templateUrl: './wanafunzi-create.component.html',
  styleUrls: ['./wanafunzi-create.component.css']
})
export class WanafunziCreateComponent {
  @Input() mwanafunziDetails = { fname: '', madrassa: '', address:'',phoneNo: 0 };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addMwanafunzi(dataMwanafunzi: any) {
    this.restApi.createmwanafunzi(this.mwanafunziDetails).subscribe((data: {}) => {
      this.router.navigate(['/mwanafunzis-list']);
    });
}
}