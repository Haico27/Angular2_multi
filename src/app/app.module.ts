import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';

import { DestinationsService } from './destinations.service';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DestinationDetailComponent,
    HomeComponent
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
