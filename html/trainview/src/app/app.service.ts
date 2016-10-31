import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
  http: Http
  loading : boolean=true
  config : any
  carriage : any
  carriages : any
  constructor(http: Http) {
    this.http = http
    this.loadConfig()
  }
  loadConfig(){
    this.loading = true;
    this.http.get('/assets/config.json').subscribe(response => {
      this.loading = false;
      this.config = response.json()
      this.carriages = this.config.train.carriages
      this.carriages.forEach(function(val,ix){
        val.index = ix + 1
        val.selected = false
      })
      this.carriage = null;
    });
  }
}



