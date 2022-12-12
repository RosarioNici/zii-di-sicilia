import { Component } from '@angular/core';
import { links } from '../home/home.data';
import {appart} from '../appartaments/data.card'

@Component({
  selector: 'app-appartaments',
  templateUrl: './appartaments.component.html',
  styleUrls: ['./appartaments.component.css']
})
export class AppartamentsComponent {
linksnav = links
dataApp= appart
}
