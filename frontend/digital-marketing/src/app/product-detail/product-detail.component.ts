import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private apiService:ApiServiceService,private route:ActivatedRoute) { }

  reviews:any=[]
  product:any
  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        this.apiService.getProductDetail(params.asin).subscribe(x => {
          this.product = x
        })
        // console.log(this.order); // popular
      });
    
      this.apiService.getReviewData().subscribe((k:any[]) => {
        console.log(this.product)
        this.reviews = k.filter((y)=>{
         return y.asin==this.product[0].asin
        })
        console.log(this.reviews)
      })
    
  }

}
