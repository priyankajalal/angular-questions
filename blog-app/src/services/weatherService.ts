import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {
  }
  public getWeatherData(city){
      return this.http.get(`http://127.0.0.1:5000/weather/${city}`)
  }
public getCountryData(country){
    return this.http.get(`http://127.0.0.1:5000/countries/${country}`)
}
public getPopulation(city){
    return this.http.get(`http://127.0.0.1:5000/population/${city}`)
}

}