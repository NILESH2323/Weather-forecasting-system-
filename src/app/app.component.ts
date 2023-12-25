import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { RecordService } from './services/record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService, public recordService:RecordService){

  } cityName:string = "London";
  weatherData?:WeatherData;
  ngOnInit():void{
    this.getWeather(this.cityName);
    
  }
  onSubmit(){
    this.getWeather(this.cityName);
    this.cityName="";
  }
  private getWeather(cityName:string)
  {
    this.weatherService.getWeatherData(cityName)
    .subscribe({next:(response: any)=>{
       this.weatherData=response;
      console.log(response);
      this.recordService.postRecord(response).subscribe((res)=>alert('Record saved'));
    }});
  }

}
