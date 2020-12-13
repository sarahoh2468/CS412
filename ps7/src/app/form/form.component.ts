import { Component, OnInit } from '@angular/core';
import {WxServiceService as WxService} from './wx-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../data/City';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'httpClient';
  currentCity = {
    name: "",
    temp_f: "",
    temp_c: ""
  };
  cities: City[] = []

  city: string;

  constructor(private wxService: WxService, private form: FormBuilder) {
  }


  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getWeatherByCity() {
    this.wxService.getWeatherByCity(this.city).subscribe(
      response => {
        this.currentCity = {
          name: this.city,
          temp_f: JSON.stringify(response.current.temp_f),
          temp_c: JSON.stringify(response.current.temp_c)
        }
        this.cities.push(this.currentCity);
        console.log(this.city);
        console.log(`main looks like this: ${JSON.stringify(response)}`);
      }
    );
  }
}


