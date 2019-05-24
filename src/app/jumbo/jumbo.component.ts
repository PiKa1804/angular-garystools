import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.css']
})
export class JumboComponent implements OnInit {
  @Input() tytul: string;
  @Input() opis: string;
  constructor() { }

  ngOnInit() {
  }

}
