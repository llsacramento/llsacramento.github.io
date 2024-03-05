import { Component } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {
  images = [
    { name: 'cafe.jpg', caption: ' Cafe'},
    { name: 'ferris_wheel.jpg', caption: 'Ferris Wheel'},
    { name: 'ferris.jpg', caption: 'Ferris'},
    { name: 'lamp.jpg', caption: 'Lamp'}
  ]

}
