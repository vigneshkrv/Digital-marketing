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
  store: Location;
  lat: number = 41.889481;
  lng: number = -87.623187;
  zoom:number = 11
  divvyLocations: Location[];
  constructor(private route:ActivatedRoute) { }
  icon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.store = {lat:params.lat,lng:params.lng,location:params.location};
        // console.log(this.order); // popular
      });

     
  }

}
