import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
  http: Http
  loading : boolean=true
  articles
  config = {
    top:null,
    left:null
  }
  constructor(http: Http) {
    this.http = http

    this.getArticles()
    this.getConfig()
  }
  getArticles(){
    this.loading = true
    this.http.get('/app/list.json').subscribe(response => {
      this.articles = response.json()
      this.loading = false
    });
  }
  getConfig(){
    this.getTopConfig()
    this.getLeftConfig()
  }
  getTopConfig(){
    this.http.get('/app/top.json').subscribe(response => {
      this.config.top = {
        links: response.json(),
        logo: {
          url:'https://img3.doubanio.com/icon/ul51905389-5.jpg',
          size:50
        }
      }
    });
  }
  getLeftConfig(){
    this.config.left = null
    this.http.get('/app/left.json').subscribe(response => {
      this.config.left = {
        links: response.json(),
      }
    });
  }
  getAtricle(){
    return this.http.get('/app/item.json')
  }
}



