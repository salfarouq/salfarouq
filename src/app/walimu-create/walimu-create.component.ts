import { Component, Input } from '@angular/core';
import { RestApi2Service } from '../shared/rest-api2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walimu-create',
  templateUrl: './walimu-create.component.html',
  styleUrls: ['./walimu-create.component.css']
})
export class WalimuCreateComponent {
  @Input() mwalimuDetails = { fname: '', madrassa: '', address:'',phoneNo: 0 };
  constructor(public restApi: RestApi2Service, public router: Router) {}
  ngOnInit() {}
  addmwalimu(datamwalimu: any) {
    this.restApi.createmwalimu(this.mwalimuDetails).subscribe((data: {}) => {
      this.router.navigate(['/mwalimus-list']);
    });
}
}
