import { Component, Input } from '@angular/core';
import { Degree } from '../Degree';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent {
  @Input() degree!: Degree;

  
}
