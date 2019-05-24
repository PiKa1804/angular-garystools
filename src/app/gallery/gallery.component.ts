import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  photo($event){
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    (<HTMLImageElement>modalImg).src = $event.currentTarget.src;
  }

  next(digit){
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("imgModal");
    var url = $('#myModal').find('img').attr('src');
    modal.style.display = "block";
    var images = $('#all1').find('img:visible').map(function() { return this.src; }).get();
    var ind = images.findIndex(x => x==url);
    if (digit==1){
      ind=ind+1;
      if (ind==images.length){
        ind=0;
      }
    }
    if (digit==2){
      ind=ind-1;
      if (ind==-1){
        ind=(images.length)-1;
      }
    }
    (<HTMLImageElement>modalImg).src = images[ind];
  }

  close(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }


  constructor() {
    $('html, body').css('overflow', 'auto');
    $(document).keydown(function(e){
      if (e.which == 37) {
          //$( "#prev" ).click();
      }
    });
    $(document).ready(function(){

      $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            if(value == "all")
            {
              $('.filter').show('fast');
              $(".filter-button").not('.'+value).css('background-color','#8c9c4e');
              $(this).css('background-color','#86755d');
            }
            else
            {
                $(".filter").not('.'+value).hide('slow');
                $(".filter-button").not('.'+value).css('background-color','#8c9c4e');
                $('.filter').filter('.'+value).show('slow');
                $(this).css('background-color','#86755d');
            }
        });
      });
  }


  ngOnInit() {

  }

}
