import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  reviews:any = []
  rate:number=4.5
  constructor(private apiService:ApiServiceService, private router:Router ){
   
  }
  ngOnInit() {
    this.apiService.getDashboardData().subscribe(x => {
      this.reviews=x
    })
  }

  navigateToStore(x)
  {
    console.log(x);
    this.router.navigate(["storelocations"],{queryParams:{store:x}})
  }

}
