import { Component } from '@angular/core';
import { links } from '../home/home.data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  linkPages = links
  form= false
}
