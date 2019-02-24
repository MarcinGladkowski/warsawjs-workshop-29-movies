import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';

const routes: Routes = [
  
  {
    path: 'list',
    component: PageVideoListComponent
  },
  {
    path: 'profile',
    component: PageVideoProfileComponent
  },
  {
    path: '**',
    component: PageVideoNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
