import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';
import 'rxjs/add/operator/map'

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
    <c-loadding *ngIf="!config"></c-loadding>
    <div *ngIf="config">
      <c-corner size="{{config?.logo?.size}}" imageurl="{{config?.logo?.url}}" style="display: inline-block; vertical-align: middle;padding:0 20px 0 10px;"></c-corner>
      <ul class="navs" style="display: inline-block;">
        <li *ngFor="let lk of config?.links; let isLast=last;">
          <a (click)="selected=lk;onSelected.emit(lk);" href="#{{lk.href}}" [ngClass]="{cur:lk == selected, last:isLast}">{{lk.title}}</a>
        </li>
      </ul>
    <div>
  </div>
  `
})
export class TopComponent {
  @Input() config
  @Output('selected') onSelected = new EventEmitter()
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
    <c-loadding *ngIf="!config"></c-loadding>
    <div *ngIf="config">
  	  <c-menu [menu]="lk" *ngFor="let lk of config?.links" [selected]="config.selected" (selected)="onSelected.emit($event);"></c-menu>
    </div>
  </div>
  `
})
export class LeftComponent {
  @Input() config
  @Output('selected') onSelected = new EventEmitter()
}

@Component({
  selector: 'c-menu',
  template: `
  <div style="padding:0px 0px;">
    <a (click)="menu.hide=!menu.hide;onSelected.emit(menu);" [ngClass]="{'menuitem':true, 'cur':selected==menu}" href="#{{menu.href}}" style="display:block;">{{menu.title}}</a>
    <div *ngIf="menu.children!=null && menu.children.length" [ngClass]="{'menu-hide':menu.hide}" style="padding-left:10px;">
      <c-menu *ngFor="let lk of menu.children; let isLast=last;" [menu]="lk" [selected]="selected" (selected)="onSelected.emit($event);"></c-menu>
    </div>
  </div>
  `
})
export class MenuComponent {
  @Input() menu
  @Input() selected
  @Output('selected') onSelected = new EventEmitter()
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
    <h2 (click)="onBack.emit(article);">{{article.title}}</h2>
    <div [innerHTML]="article | articleContentPipe">
      
    </div>
  `
})
export class ArticleComponent {
  @Input() article
  @Output('back') onBack = new EventEmitter()
}

@Component({
  selector: 'c-list',
  template: `
  <ul class="main-list">
    <li *ngFor="let item of list">
      <a class="title" (click)="onSelected.emit(item);">{{item.title}}</a>
      <p class="desc">{{item.desc}}</p>
    </li>
  </ul>
  `
})
export class ListComponent {
  @Input() list
  @Output('selected') onSelected = new EventEmitter()
}

@Component({
  selector: 'c-main',
  template: `
  <div>
    <c-loadding *ngIf="loading" style="text-align: center; padding-top: 30px; display:block;"></c-loadding>
    <c-list *ngIf="!loading && !item" [list]="list" (selected)="openArticle($event);"></c-list>
    <div *ngIf="!loading && item">
      <div><a (click)="item=null;">返回列表</a></div>
      <c-article [article]="item"></c-article>  
    </div>
  </div>
  `
})
export class MainComponent {
  @Input() list
  @Input() loading
  item = null

  app: AppService
  constructor(app: AppService) {
    this.app = app
  }

  openArticle(article){
    this.loading = true
    this.app.getAtricle().subscribe(response => {
      this.loading = false
      this.item = response.json()
    });
  }
}


