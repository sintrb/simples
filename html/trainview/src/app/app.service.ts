import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
  http: Http
  loading : boolean=true
  config = {

  }
  constructor(http: Http) {
    this.http = http
    this.getConfig()
  }
  getConfig(){
    this.loading = true;
    this.http.get('/app/config.json').subscribe(response => {
      this.loading = false;
      this.config = response.json()
    });
  }
}



