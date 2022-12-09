import { Component } from '@angular/core';
import { dataPrev } from './preview.data';
import { slides } from './preview.data';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  data = dataPrev
  carousel = slides
  index = 0;
  moveImg() {
    if (this.index < 4) {
        this.index++

    } else {
        this.index = 0
    }
  }
  invetMoveImg() {

    if (this.index > 0) {
        this.index--

    } else {
        this.index = 4

    }
}

}
