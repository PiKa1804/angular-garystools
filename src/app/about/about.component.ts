import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'ABOUT';
  description = 'About myself';

  constructor() {
  $('html, body').css('overflow', 'hidden');
 }

  ngOnInit() {
  }

}
