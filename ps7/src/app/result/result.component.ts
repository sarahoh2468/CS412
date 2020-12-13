import {Component, Input, OnInit} from '@angular/core';
import {City} from '../data/City';

@Component({
  selector: 'app-result',
  template: '<h3>Result</h3>' +
    '<div name="outerList" *ngFor="let city of cities">' +
    '<div name="details" *ngIf="isEqual(city.name)">' +
    'The current temperature in {{currentCity.name}}' +
    '<br/> Temp in fahrenheit is: {{currentCity.temp_f}} F' +
    '<br/> Temp in celsius is: {{currentCity.temp_c}} C' +
    '</div>' +
    '</div>',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() currentCity = {
    name: "",
    temp_f: "",
    temp_c: ""
  }

  @Input() cities: City[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  isEqual(cityName: string) {
    return cityName === this.currentCity.name;
  }

}
