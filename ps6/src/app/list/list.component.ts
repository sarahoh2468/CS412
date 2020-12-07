import { Component, OnInit } from '@angular/core';
import { cities } from '../data/cityMOCK';
import {City} from '../data/City';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cities: City[] = cities;
  city: City;
  selectedCity: City;
  fubar: any;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  showTemp(cityName: string) {
    this.selectedCity = this.cities.find(city => city.location.name === cityName);
  }
}
