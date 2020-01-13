import { Component, OnInit } from '@angular/core';
import { faMobile, faEnvelopeOpen, faFax } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faMobile = faMobile;
  faEnvelopeOpen = faEnvelopeOpen;
  faFax = faFax;

  location = {
    phoneNumber: '+272493676'
  }

  constructor() { }

  ngOnInit() {
  }

}
