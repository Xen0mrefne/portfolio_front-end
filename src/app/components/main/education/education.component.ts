import { Component } from '@angular/core';
import { Degree } from './Degree'
import { DEGREES } from './degree_list';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  degrees:Degree[] = DEGREES;

}
