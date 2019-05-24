import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BlogComponent } from './blog/blog.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxEditorModule } from 'ngx-editor';
import * as $ from 'jquery';
import { GalleryComponent } from './gallery/gallery.component';
import {CrystalGalleryModule} from 'ngx-crystal-gallery';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    JumboComponent,
    BlogComponent,
    GalleryComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxEditorModule,
    CrystalGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
