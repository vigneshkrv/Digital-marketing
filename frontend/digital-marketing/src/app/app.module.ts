import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from "ngx-bar-rating";
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ReversePipe } from './utilities/reverse-pipe';
import { ReviewChartsComponent } from './review-charts/review-charts.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { StoreMapsComponent } from './store-maps/store-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllProductsComponent,
    ReversePipe,
    ReviewChartsComponent,
    StoreMapsComponent
  ],
  imports: [
    BarRatingModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAoUItadOvNS5aG7qm0bvV7rlBWEEv8l08'+ '&libraries=visualization'}),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
