import { Component } from '@angular/core';
import { links } from '../home/home.data';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

linkPages = links

}
