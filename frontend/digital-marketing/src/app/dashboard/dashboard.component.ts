import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  reviews:any = []
  rate:number=3.5
  constructor(private apiService:ApiServiceService){
   
  }
  ngOnInit() {
    this.apiService.getDashboardData().subscribe(x => {
      this.reviews=x
    })
  }

}
