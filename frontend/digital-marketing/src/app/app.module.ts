import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from "ngx-bar-rating";
import {HttpClientModule} from '@angular/common/http'
import { MatToolbarModule, MatFormFieldModule,MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoresComponent } from './stores/stores.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductChartsComponent } from './product-charts/product-charts.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TopProductStatsComponent } from './top-product-stats/top-product-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllProductsComponent,
    ReversePipe,
    ReviewChartsComponent,
    StoreMapsComponent,
    StoresComponent,
    ProductDetailComponent,
    ProductChartsComponent,
    StatisticsComponent,
    TopProductStatsComponent
  ],
  imports: [
    BarRatingModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAFWmQtlX6AqeHbOW1Lk2fNXtvH59sobLw'+ '&libraries=visualization'}),
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
