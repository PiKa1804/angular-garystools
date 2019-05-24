import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  openNav(): void {
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";
  }

  closeNav(): void {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "55px";
  }
}
