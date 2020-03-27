import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../services/weatherService";
import {filter, map,mergeMap} from 'rxjs/operators';
import {from, Observable,forkJoin} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  weatherData ;
  populationData;
  populationData$:any;
  ngOnInit() {
    this.getParallelDataJoinFork();
    this.populationData$ = this.weatherService.getPopulation("Delhi");
  }
  getNested(){
    this.weatherService.getCountryData('India').subscribe(
      countryData=> {
        console.log(countryData);
         this.weatherService.getWeatherData(countryData['city']).subscribe(
          weatherData => {console.log(weatherData)}
         )
      }
    )
  }
  getWithMergeMap(){
    this.weatherService.getCountryData('India').pipe(
      mergeMap(
        countryData=> 
          this.weatherService.getWeatherData(countryData['city'])
      )
    ).subscribe(
      weatherData => {console.log(weatherData)}
    )
  }

  getParallelData(){
    let city ="Delhi"
    this.weatherService.getWeatherData(city).subscribe(cityData=>console.log(cityData))
    this.weatherService.getPopulation(city).subscribe(cityData=>console.log(cityData))

  }
  getParallelDataJoinFork(){
    let city ="Delhi"
    let weatherData=this.weatherService.getWeatherData(city)
    let populationData= this.weatherService.getPopulation(city)
    forkJoin([weatherData,populationData]).subscribe(
      res => 
      {
        console.log(res);
        this.weatherData = res[0]
        this.populationData = res[1]
      }
    )

  }

}
