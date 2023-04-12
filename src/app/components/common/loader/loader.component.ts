import { Component, Input } from '@angular/core';
import { LoaderType } from './loaderType';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() type!: LoaderType;

  spinner: LoaderType = LoaderType.spinner;
  text: LoaderType = LoaderType.text;
  card: LoaderType = LoaderType.card;
  pie: LoaderType = LoaderType.pie;
}
