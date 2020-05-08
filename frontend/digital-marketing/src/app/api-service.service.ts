import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { 

  }

  getDashboardData2() {
    return this.http.get("http://localhost:4300/api/dashboarddata")
}

  getDashboardData() {
      return this.http.get("http://localhost:4300/api/dashboard")
  }
  getAllProductData() {
    return this.http.get("http://localhost:4300/api/products")
}

  getReviewData() {
    return this.http.get("http://localhost:4300/api/charts")
}
  getTopProduct() {
    return this.http.get("http://localhost:4300/api/topproduct")
}
  getTopReviewed() {
     return this.http.get("http://localhost:4300/api/topreviewed")
}
  getProductDetail(asin) {
    return this.http.get(`http://localhost:4300/api/product?asin=${asin}`)
  }
}
