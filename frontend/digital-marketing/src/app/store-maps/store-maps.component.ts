import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Location {
  lat: number;
  lng: number;
  location:string
  zoom?: number;
}

@Component({
  selector: 'app-store-maps',
  templateUrl: './store-maps.component.html',
  styleUrls: ['./store-maps.component.scss']
})

export class StoreMapsComponent implements OnInit {
  store: string;
  lat: number = 41.889481;
  lng: number = -87.623187;
  zoom:number = 11
  storeLocations: Location[];
  constructor(private route:ActivatedRoute) { }

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
        case "BestBuy": {
          this.storeLocations = [{lat:41.867586,  lng:-87.641484,location:"W Roosevelt Road"},{lat:41.919146, lng: -87.669586, location:"N Elston Avenue"},{lat:41.912745,lng:  -87.654611, location:"W North Avenue"}]
          
        }
        break;
        case "Fossil": {
          this.storeLocations = [{lat:41.801252, lng:-88.273979,location:"Aurora Premium Outlet"},{lat:42.046949,  lng:-88.036948, location:"Woodfield Mall"}]
          
        }
        break;
        case "Tmobile": {
          this.storeLocations = [{lat:41.874640,lng: -87.626957,location:"E Harrison Street"},{lat:41.880652, lng: -87.634958, location:"W Monroe Street"},{lat:41.879943, lng: -87.647566, location:"S Halsted Street"}]
          
        }
        break;
        
      }
  }

}
