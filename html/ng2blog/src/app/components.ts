import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c-corner',
  template: `
  <div [ngStyle]="{'border-radius.px': size || 50, border:'1px solid gray', overflow: 'hidden'}">
    <a href="#">
      <img [src]="imageurl" [ngStyle]="{'width.px': size || 50, 'height.px': size || 50}"/>
    </a>
  </div>
  `
})
export class CornerComponent {
  @Input() imageurl: string;
  @Input() size: number = 50;
}

@Component({
  selector: 'c-top',
  template: `
  <div class="main-nav">
    <c-corner size="40" imageurl="https://img3.doubanio.com/icon/ul51905389-5.jpg" style="display: inline-block; vertical-align: middle;padding:0 20px 0 10px;"></c-corner>
    <ul class="navs" style="display: inline-block;">
      <li *ngFor="let lk of links; let isLast=last;">
        <a (click)="selected=lk;onSelected.emit(lk);" href="#{{lk.href}}" [ngClass]="{cur:lk == selected, last:isLast}">{{lk.title}}</a>
      </li>
    </ul>
  </div>
  `
})
export class TopComponent {
  links = require("./top.json")
  selected = this.links[0]
  @Output('selected') onSelected = new EventEmitter()
  // this.onSelected.emit(this.selected)
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
  	<c-menu [menu]="lk" *ngFor="let lk of links"></c-menu>
  </div>
  `
})
export class LeftComponent {
  links = require("./left.json")
  curlink = this.links[0]
}

@Component({
  selector: 'c-menu',
  template: `
  <div style="padding:0px 0px;">
    <a (click)="menu.hide=!menu.hide;" class="menuitem" href="#{{menu.href}}" style="display:block;">{{menu.title}}</a>
    <div *ngIf="menu.children!=null && menu.children.length" [ngClass]="{'menu-hide':menu.hide}" style="padding-left:10px;">
      <c-menu *ngFor="let lk of menu.children; let isLast=last;" [menu]="lk"></c-menu>
    </div>
  </div>
  `
})
export class MenuComponent {
  @Input() menu;
}

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
  selector: 'c-article',
  template: `
  <div class="ball-pulse-sync">
    <div></div>
    <div></div>
    <div></div>
  </div>
  `
})
export class ArticleComponent {
}

@Component({
  selector: 'c-list',
  template: `
  <ul class="main-list">
    <li *ngFor="let item of list">
      <a class="title">{{item.title}}</a>
      <p class="desc">{{item.desc}}</p>
    </li>
  </ul>
  `
})
export class ListComponent {
  list = require("./list.json")
}

@Component({
  selector: 'c-main',
  template: `
  <div>
    <!-- <c-loadding style="text-align: center; padding-top: 30px; display:block;"></c-loadding> -->
    <c-list></c-list>
    <!-- <c-article></c-article> -->
  </div>
  `
})
export class MainComponent {
  loadlist(){

  }
  loadarticle(){

  }
}


