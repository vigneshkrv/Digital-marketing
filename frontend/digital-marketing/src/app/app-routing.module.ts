import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ReviewChartsComponent} from "./review-charts/review-charts.component"
import { StoreMapsComponent } from './store-maps/store-maps.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent }, 
                        { path: '', redirectTo: "dashboard", pathMatch: 'full' },
                        {path:'allProducts', component:AllProductsComponent},
                        {path:'charts', component:ReviewChartsComponent},
                        {path:'storelocations',component:StoreMapsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
