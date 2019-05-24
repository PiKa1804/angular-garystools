import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'HOME';
  description = 'Coś o homie';

  openNav(): void {
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";
  }


  constructor() {
    $('html, body').css('overflow', 'auto');
    $(document).ready(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1);
      $("#hamburger").css("margin-top", 0);
      $("#first").addClass('scroll_item_active');
        var main = main = $('#scroll');
        $('.scroll_item').click(function (event) {
            event.preventDefault();
            var trgt = $(this).attr('id') + "1";
            var target_offset = $('#' + trgt).offset();
            var target_top = target_offset.top;
            $('html, body').animate({
                scrollTop: target_top
            }, 500);

            main.children().removeClass('scroll_item_active');
            $(this).addClass('scroll_item_active');
    	   });
       });

       $( ".router" ).click(function() {
         $('html, body').animate({
             scrollTop: 0
         }, 1);
         $("#first").addClass('scroll_item_active');
         $("#second").removeClass('scroll_item_active');
        });
  }

  ngOnInit() {
  }

}
