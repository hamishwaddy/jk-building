import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faChevronDown = faChevronDown;
  collapsed = true;
  arrowClass = "arrow";

  constructor() { }

  ngOnInit() {
  }

}
