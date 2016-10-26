import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'c-loadding',
  template: `
  <div class="ball-pulse-sync">
    <div></div>
    <div></div>
    <div></div>
  </div>
  `
})
export class LoaddingComponent {
}


@Component({
  selector: 'app',
  template: `
  <div>
    <c-loadding *ngIf="loadding"></c-loadding>
  </div>
  `
})
export class AppComponent {
  selected = null
  app: AppService

  constructor(app: AppService) {
    this.app = app
  }
}