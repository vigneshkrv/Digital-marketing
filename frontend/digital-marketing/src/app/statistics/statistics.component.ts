import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  constructor(private apiService: ApiServiceService) { }
reviews:any
idArray = ["A","B","C","D","E","F","G","H","I","J","K","L"];
  ngOnInit() {
    this.apiService.getTopReviewed().subscribe(x => {
      this.reviews = x
      console.log(x)
      
      // this.ratingArr = this.ratingArr.splice(1,5);
      
    })
  }

  testReload(){
    window.location.reload()
  }

}
