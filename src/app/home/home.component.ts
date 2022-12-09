import { Component } from '@angular/core';
import { links } from './home.data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  linkPages = links


}
