import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }      from './about/about.component';
import { HomeComponent }      from './home/home.component';
import { BlogComponent }      from './blog/blog.component';
import { GalleryComponent }      from './gallery/gallery.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
