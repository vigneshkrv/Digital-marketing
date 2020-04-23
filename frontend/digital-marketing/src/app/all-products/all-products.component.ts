import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  searchResult:any=[]
  reviews:any = []
  reviewData:any = []
  searchValue:any=""
  faSearch = faSearch;
  constructor(private apiService:ApiServiceService){
   
  }
  ngOnInit() {
    this.apiService.getDashboardData().subscribe(x => {
      this.reviews=x
      this.reviewData=x
    })
  }

  searchProducts(){
    if(this.searchValue!="")
      {
      this.searchResult=this.reviews.filter((x)=>{
        var temp= x.title.toLowerCase()
        return temp.includes(this.searchValue.toLowerCase())
      })
      
      this.reviewData = this.searchResult
    }
  }

  changeInput() {
    if(this.searchValue=="")
    {
      this.reviewData = this.reviews 
    }
  }

}
