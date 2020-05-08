packages used in the Backend:

* body-parser
* express
* cors
* pg

Required Files for the Backend:

1. products.csv
2. productReviews.csv
 => Both the files are present in the folder "dataSource" in path "Digital-marketing/backend/datasourse". 
 => This is what we have stored in the postgres as tables

To run the Backend:

* cd .\backend
* run "npm i" to install all the packages necessary
* node server.js

Packages used in the Frontend:

    "@agm/core": "^1.0.0-beta.7",
    "@angular/animations": "~7.2.0",
    "@angular/cdk": "~7.3.7",
    "@angular/common": "~7.2.0",
    "@angular/compiler": "~7.2.0",
    "@angular/core": "~7.2.0",
    "@angular/forms": "~7.2.0",
    "@angular/material": "^7.3.7",
    "@angular/platform-browser": "~7.2.0",
    "@angular/platform-browser-dynamic": "~7.2.0",
    "@angular/router": "~7.2.0",
    "@fortawesome/angular-fontawesome": "^0.2.1",
    "@fortawesome/fontawesome-svg-core": "^1.2.28",
    "@fortawesome/free-solid-svg-icons": "^5.13.0",
    "@ng-bootstrap/ng-bootstrap": "^4.0.2",
    "bootstrap": "^4.4.1",
    "core-js": "^2.5.4",
    "d3": "^5.15.1",
    "d3-array": "^2.4.0",
    "hammerjs": "^2.0.8",
    "ngx-bar-rating": "^1.1.0",
    "rxjs": "~6.3.3",
    "tslib": "^1.9.0",
    "zone.js": "~0.8.26"

To run the Front end:

* open another terminal in the IDE(vs code)
* cd .\frontend\digital-marketing
* run "npm i" to install all the packages necessary
* ng serve --open
