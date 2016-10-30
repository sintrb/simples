import { Component, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import 'rxjs/add/operator/map'
var style = <string>require('assets/style.less');

import {Carriage } from './app.models';

@Component({
  selector: 'loading',
  template: `
  <div class="ball-pulse-sync">
    <div></div>
    <div></div>
    <div></div>
  </div>
  `
})
export class LoadingComponent {
}

@Component({
  selector: 'carriage',
  template: `
      <div class="box" [ngClass]="{selected:data.selected}">
        <span class="number">{{data?.index}}</span>
        <span class="name">{{data?.name}}</span>
      </div><div *ngIf="!isLast" class="line">
      
      </div>
  `,
})
export class CarriageComponent {
    @Input() isLast: boolean
    @Input() data: any
}

@Component({
  selector: 'train',
  template:  `
      <carriage (click)="onCarriageSelected.emit(c);" *ngFor="let c of train?.carriages; let i = index; let isLast=last;" [isLast]="isLast" [data]="c"></carriage>
  `,
})
export class TrainComponent{
  @Output('carriageSelected') onCarriageSelected = new EventEmitter()
  @Input() train:any;
  constructor(){
  }
}

@Component({
  selector: 'carriagepanel',
  template:  `
    <h3 class="name">{{carriage?.name}}</h3>
    <div>

    </div>
  `,
})
export class CarriagePanelComponent{
  @Input() carriage:any;
  constructor(){
  }
}

@Component({
  selector: 'app',
  template: `
  <div style="margin:5px 0;">
    <button (click)="add()">添加车厢</button>
    <button (click)="del()">删除车厢</button>
    <button (click)="save()">保存配置</button>
    <button (click)="load()">加载配置</button>
  </div>
  <div *ngIf="!app.loading">
    <train class="train" [train]="app.config?.train" (carriageSelected)="onCarriageSelected($event);"></train>
    <carriagepanel *ngIf="app.carriage" [carriage]="app?.carriage" style="margin-top:5px;"></carriagepanel>
  </div>
  <loading *ngIf="app.loading" style="display:block;text-align:center;margin-top:10px;"></loading>
  `,
  styles:[style,],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  app: AppService
  constructor(app: AppService) {
    this.app = app
    console.log(style)
  }
  add(){
    var ix = this.app.carriages.length + 1;
    this.app.carriages.push({
      name:"第"+ix+"节",
      index:ix
    })
  }
  del(){
    if(this.app.carriage){
      var curix = this.app.carriages.indexOf(this.app.carriage)
      this.app.carriages.splice(curix,1)
      if(curix < this.app.carriages.length){
        this.app.carriage = this.app.carriages[curix];
      }
      else{
        this.app.carriage = null;
      }
      this.app.carriages.forEach(function(val,ix){
        if(curix != ix)
          val.selected = false
        else
        val.selected = true
      })
    }
  }
  save(){
    console.log(this.app.config)
  }
  load(){
    this.app.loadConfig()
  }
  onCarriageSelected(e){
    this.app.carriage = e
    this.app.carriages.forEach(function(val,ix){
      if(val != e)
        val.selected = false
      else
      val.selected = true
    })
  }
}

function drag(){

}