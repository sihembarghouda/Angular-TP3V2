import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapDSI21Component } from './face-snap-dsi21/face-snap-dsi21.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    FaceSnapDSI21Component,
    FaceSnapListComponent,
    HeaderComponent,  // HeaderComponent devrait être déclaré ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
