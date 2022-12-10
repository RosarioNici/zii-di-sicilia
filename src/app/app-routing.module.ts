import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FoodComponent } from './food/food.component';
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes =[
  {path: '', component: WelcomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:FormComponent},
  {path: 'food', component:FoodComponent},
  {path: 'exper', component:ExperienceComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
