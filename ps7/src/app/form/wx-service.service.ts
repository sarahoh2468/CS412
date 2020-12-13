import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {config as API} from '../../config/openweather';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = API.baseURL
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getWeatherByCity(city: string) {
    return this.http.get(API.baseURL + '?key=' + API.apiKey + '&q=' + city);

  }

}
