import {City} from './City';

export const cities: City[] = [
  {
    location: {
      name: 'Boston',
      region: 'Massachusetts',
      country: 'United States of America',
      lat: 42.36,
      lon: -71.06,
      tz_id: 'America/New_York',
      localtime_epoch: 1607369390,
      localtime: '2020-12-07 14:29',
    },
    current: {
      last_updated_epoch: 1607364906,
      last_updated: '2020-12-07 13:15',
      temp_c: 0.6,
      temp_f: 33.1,
      is_day: 1,
      condition: {
        text: 'Partly cloudy',
        icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        code: 1003
      },
      wind_mph: 5.6,
      wind_kph: 9.0,
      wind_degree: 290,
      wind_dir: 'WNW',
      pressure_mb: 1006.0,
      pressure_in: 30.2,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 56,
      cloud: 50,
      feelslike_c: -3.4,
      feelslike_f: 25.8,
      vis_km: 16.0,
      vis_miles: 9.0,
      uv: 2.0,
      gust_mph: 9.8,
      gust_kph: 15.8
    },
  },
  {
    location: {
      name: 'Los Angeles',
      region: 'California',
      country: 'United States of America',
      lat: 34.05,
      lon: -118.24,
      tz_id: 'America/Los_Angeles',
      localtime_epoch: 1607370559,
      localtime: '2020-12-07 11:49'
    },
    current: {
      last_updated_epoch: 1607364905,
      last_updated: '2020-12-07 10:15',
      temp_c: 14.4,
      temp_f: 57.9,
      is_day: 1,
      condition: {
        text: 'Sunny',
        icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
        code: 1000
      },
      wind_mph: 0.0,
      wind_kph: 0.0,
      wind_degree: 0,
      wind_dir: 'N',
      pressure_mb: 1016.0,
      pressure_in: 30.5,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 40,
      cloud: 0,
      feelslike_c: 14.4,
      feelslike_f: 57.9,
      vis_km: 14.0,
      vis_miles: 8.0,
      uv: 5.0,
      gust_mph: 2.9,
      gust_kph: 4.7
    }
  },
  {
    location: {
      name: 'New York',
      region: 'New York',
      country: 'United States of America',
      lat: 40.71,
      lon: -74.01,
      tz_id: 'America/New_York',
      localtime_epoch: 1607370948,
      localtime: '2020-12-07 14:55'
    },
    current: {
      last_updated_epoch: 1607364905,
      last_updated: '2020-12-07 13:15',
      temp_c: 4.4,
      temp_f: 39.9,
      is_day: 1,
      condition: {
        text: 'Overcast',
        icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
        code: 1009
      },
      wind_mph: 0.0,
      wind_kph: 0.0,
      wind_degree: 0,
      wind_dir: 'N',
      pressure_mb: 1008.0,
      pressure_in: 30.2,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 44,
      cloud: 100,
      feelslike_c: 1.4,
      feelslike_f: 34.6,
      vis_km: 16.0,
      vis_miles: 9.0,
      uv: 2.0,
      gust_mph: 9.4,
      gust_kph: 15.1
    }
  }
];
