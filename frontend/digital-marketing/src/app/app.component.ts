import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService:ApiServiceService){
    this.apiService.getDashboardData().subscribe(x => {
      console.log(x)
    })
  }
  title = 'digital-marketing';
}
