import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface Location {
  lat: number;
  lng: number;
  location:string
  zoom?: number;
}

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  store: string;
  lat: number = 41.889481;
  lng: number = -87.623187;
  zoom:number = 11
  storeLocations: Location[];
  constructor(private route:ActivatedRoute, private router:Router) { }
   
  displayedColumns = ['latitude', 'longitude', 'address','divvy'];
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.store = params.store;
        // console.log(this.order); // popular
      });

      switch(this.store) {
        case "Apple": {
          this.storeLocations = [{lat:41.889481,lng:-87.623187,location:"Apple Michigan Avenue"},{lat:41.910703, lng:-87.648505, location:"Apple Licoln Park"},{lat:41.850634,lng: -87.953531, location:"Apple Oakbrook"}]
          
        }
        break;
        case "Best Buy": {
          this.storeLocations = [{lat:41.867586,  lng:-87.641484,location:"W Roosevelt Road"},{lat:41.919146, lng: -87.669586, location:"N Elston Avenue"},{lat:41.912745,lng:  -87.654611, location:"W North Avenue"}]
          
        }
        break;
        case "Online": {
          this.storeLocations = [{lat:41.801252, lng:-88.273979,location:"Aurora Premium Outlet"},{lat:42.046949,  lng:-88.036948, location:"Woodfield Mall"}]
          
        }
        break;
        case "Tmobile": {
          this.storeLocations = [{lat:41.874640,lng: -87.626957,location:"E Harrison Street"},{lat:41.880652, lng: -87.634958, location:"W Monroe Street"},{lat:41.879943, lng: -87.647566, location:"S Halsted Street"}]
          
        }
        break;
        
      }
  }

  onNavigateMaps(x)
  {
    console.log(x);
    this.router.navigate(["divvylocations"],{queryParams:x})
  }


}
