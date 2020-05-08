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
  stores=["Best Buy", "Apple",  "Best Buy","Best Buy", "Apple","Apple", "Online", "Best Buy",]
  constructor(private apiService:ApiServiceService, private router:Router ){
   
  }
  ngOnInit() {
    this.apiService.getDashboardData().subscribe((x:any[]) => {
      this.reviews=x.filter(k=>{
        //console.log(k.rating);
        return (k.rating=5)
      })
     this.reviews= this.reviews.slice( Math.max(this.reviews.length-8,0))
    })
  }

  navigateToStore(x)
  {
    console.log(x);
    if(x!="Online")
    this.router.navigate(["storelocations"],{queryParams:{store:x}})
  }

  navigateProduct(x) {
    this.router.navigate(["ProductDetail"],{queryParams:{asin:x}})
  }
}
