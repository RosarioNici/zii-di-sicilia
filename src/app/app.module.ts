import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PreviewComponent } from './home/preview/preview.component';
import { SunsetComponent } from './home/sunset/sunset.component';
import { LitleusComponent } from './home/litleus/litleus.component';
import { MagicComponent } from './home/magic/magic.component';
import { FooterComponent } from './home/footer/footer.component';
import { FormComponent } from './form/form.component';
import { FoodComponent } from './food/food.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppartamentsComponent } from './appartaments/appartaments.component';
import { Appart01Component } from './appart01/appart01.component';
import { WhereComponent } from './appart01/where/where.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    CarouselComponent,
    PreviewComponent,
    SunsetComponent,
    LitleusComponent,
    MagicComponent,
    FooterComponent,
    FormComponent,
    FoodComponent,
    ExperienceComponent,
    AppartamentsComponent,
    Appart01Component,
    WhereComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HttpClientModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
