import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'BLOG';
  description = 'Coś o blogu';
  htmlContent='</br>';
  addpost(): void {
      $("#posts").append(this.htmlContent+'</br>');
    }

  constructor() {
    $('html, body').css('overflow', 'auto');
  }

  ngOnInit() {
  }

}
