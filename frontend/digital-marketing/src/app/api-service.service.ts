import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { 

  }

  getDashboardData() {
      return this.http.get("http://localhost:4000/api/dashboard")
  }
}
