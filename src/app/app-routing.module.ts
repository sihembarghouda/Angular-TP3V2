import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapListComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  imports: [ BrowserModule,AppRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export class AppModule {}

