import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewVideoComponent} from './view-video/view-video.component';


const routes: Routes = [
  {path: '', redirectTo: 'viewVideo', pathMatch: 'full'},
  {path: 'viewVideo', component: ViewVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
