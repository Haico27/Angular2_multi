import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';

import { DestinationsService } from './destinations.service'


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DestinationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
