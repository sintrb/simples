import { Component } from '@angular/core';

@Component({
  selector: 'c-top',
  template: `
  <div class="main-nav">
    <div class="info"></div>
    <ul class="navs">
      <li *ngFor="let lk of links; let isLast=last;">
        <a (click)="curlink=lk" href="#{{lk.href}}" [ngClass]="{cur:lk == curlink, last:isLast}">{{lk.title}}</a>
      </li>
    </ul>
  </div>
  `
})
export class TopComponent {
  links = require("./top.json")
  curlink = this.links[0]
}


@Component({
  selector: 'c-bottom',
  template: `
  <div class="bottom">
    
  </div>
  `
})
export class BottomComponent { }


@Component({
  selector: 'c-left',
  template: `
  <div>
  	左侧导航条
  </div>
  `
})
export class LeftComponent {
  links = require("./left.json")
  curlink = this.links[0]
}


@Component({
  selector: 'c-main',
  template: `
  <div>
    
  </div>
  `
})
export class MainComponent {
  links = require("./left.json")
  curlink = this.links[0]
}



