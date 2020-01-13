import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ 
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: true, showIndicators: false, pauseOnFocus: true } } 
  ]
})
export class GalleryComponent implements OnInit {
  
  ngOnInit() {
  }

}
