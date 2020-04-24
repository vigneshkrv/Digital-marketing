import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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
  constructor(private apiService:ApiServiceService, private router:Router){
   
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

  navigateProduct(x) {
    this.router.navigate(["ProductDetail"],{queryParams:{asin:x}})
  }

}
