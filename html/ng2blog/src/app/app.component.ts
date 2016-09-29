import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app',
  template: `
  <c-top (selected)="onTopSelected($event);" [config]="app.config?.top"></c-top>
  <div class="main">
    <c-left (selected)="onLeftSelected($event);" [config]="app.config?.left"></c-left>
    <c-main [list]="app.articles" [loading]="app.loading"></c-main>
    <div style="clear:both;"></div>
  </div>
  <c-bottom (click)="app.getConfig();"></c-bottom>
  `
})
export class AppComponent {
  selected = null
  app: AppService

  constructor(app: AppService) {
    this.app = app
  }

  onTopSelected($event){
    console.log($event)
    this.selected = $event;
  }
  onLeftSelected($event){
    console.log($event)
    this.app.config.left.selected = $event
    this.app.getArticles();
  }
}

