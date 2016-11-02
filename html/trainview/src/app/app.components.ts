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
  selector: 'svgpanel',
  template:  `
    <svg>
        <g width="100%" height="100%">
          <defs>
            <pattern id="grid_cell" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="none" stroke="#FF0000" stroke-width="0.3"/>
            </pattern>
            <g id="desk" patternUnits="userSpaceOnUse" transform="scale(0.03)">
              <path d="M529.066667 750.933333 699.733333 750.933333C709.1712 750.933333 716.8 743.287467 716.8 733.866667 716.8 724.445867 709.1712 716.8 699.733333 716.8L324.266667 716.8C314.845867 716.8 307.2 724.445867 307.2 733.866667 307.2 743.287467 314.845867 750.933333 324.266667 750.933333L494.933333 750.933333 494.933333 812.1344 380.330667 926.737067C373.6576 923.528533 366.2848 921.6 358.4 921.6 330.171733 921.6 307.2 944.571733 307.2 972.8 307.2 1001.028267 330.171733 1024 358.4 1024 386.628267 1024 409.6 1001.028267 409.6 972.8 409.6 964.9152 407.671467 957.5424 404.462933 950.869333L494.933333 860.398933 494.933333 924.740267C475.101867 931.822933 460.8 950.5792 460.8 972.8 460.8 1001.028267 483.771733 1024 512 1024 540.228267 1024 563.2 1001.028267 563.2 972.8 563.2 950.5792 548.881067 931.822933 529.066667 924.740267L529.066667 860.398933 619.537067 950.869333C616.3456 957.5424 614.417067 964.932267 614.417067 972.8 614.417067 1001.028267 637.3888 1024 665.6 1024 693.828267 1024 716.8 1001.028267 716.8 972.8 716.8 944.571733 693.828267 921.6 665.6 921.6 657.7152 921.6 650.325333 923.528533 643.669333 926.737067L529.066667 812.1344 529.066667 750.933333 529.066667 750.933333ZM358.4 989.866667C348.996267 989.866667 341.333333 982.203733 341.333333 972.8 341.333333 963.396267 348.996267 955.733333 358.4 955.733333 367.803733 955.733333 375.466667 963.396267 375.466667 972.8 375.466667 982.203733 367.803733 989.866667 358.4 989.866667L358.4 989.866667ZM512 989.866667C502.596267 989.866667 494.933333 982.203733 494.933333 972.8 494.933333 963.396267 502.596267 955.733333 512 955.733333 521.403733 955.733333 529.066667 963.396267 529.066667 972.8 529.066667 982.203733 521.403733 989.866667 512 989.866667L512 989.866667ZM682.666667 972.8C682.666667 982.203733 675.0208 989.866667 665.6 989.866667 656.196267 989.866667 648.5504 982.203733 648.5504 972.8 648.5504 963.396267 656.196267 955.733333 665.6 955.733333 675.0208 955.733333 682.666667 963.396267 682.666667 972.8L682.666667 972.8Z" p-id="2613"></path><path d="M580.778667 392.533333 580.608 392.533333C571.1872 392.533333 563.626667 400.1792 563.626667 409.6 563.626667 419.0208 571.357867 426.666667 580.778667 426.666667 590.199467 426.666667 597.845333 419.0208 597.845333 409.6 597.845333 400.1792 590.199467 392.533333 580.778667 392.533333" p-id="2614"></path><path d="M444.245333 392.533333 444.074667 392.533333C434.653867 392.533333 427.093333 400.1792 427.093333 409.6 427.093333 419.0208 434.824533 426.666667 444.245333 426.666667 453.666133 426.666667 461.312 419.0208 461.312 409.6 461.312 400.1792 453.666133 392.533333 444.245333 392.533333" p-id="2615"></path><path d="M512.341333 290.133333C502.920533 290.133333 495.36 297.7792 495.36 307.2 495.36 316.6208 503.074133 324.266667 512.512 324.266667 521.9328 324.266667 529.578667 316.6208 529.578667 307.2 529.578667 297.7792 521.9328 290.133333 512.512 290.133333L512.341333 290.133333" p-id="2616"></path><path d="M580.778667 187.733333 580.608 187.733333C571.1872 187.733333 563.626667 195.3792 563.626667 204.8 563.626667 214.2208 571.357867 221.866667 580.778667 221.866667 590.199467 221.866667 597.845333 214.2208 597.845333 204.8 597.845333 195.3792 590.199467 187.733333 580.778667 187.733333" p-id="2617"></path><path d="M444.245333 187.733333 444.074667 187.733333C434.653867 187.733333 427.093333 195.3792 427.093333 204.8 427.093333 214.2208 434.824533 221.866667 444.245333 221.866667 453.666133 221.866667 461.312 214.2208 461.312 204.8 461.312 195.3792 453.666133 187.733333 444.245333 187.733333" p-id="2618"></path><path d="M1006.933333 546.133333 17.066667 546.133333C7.645867 546.133333 0 553.7792 0 563.2 0 572.6208 7.645867 580.266667 17.066667 580.266667L34.133333 580.266667 34.133333 665.6C34.133333 675.0208 41.7792 682.666667 51.2 682.666667L102.4 682.666667 102.4 1006.933333C102.4 1016.354133 110.045867 1024 119.466667 1024L187.733333 1024C197.154133 1024 204.8 1016.354133 204.8 1006.933333L204.8 733.866667C204.8 724.445867 197.154133 716.8 187.733333 716.8 178.312533 716.8 170.666667 724.445867 170.666667 733.866667L170.666667 989.866667 136.533333 989.866667 136.533333 665.6C136.533333 656.1792 128.887467 648.533333 119.466667 648.533333L68.266667 648.533333 68.266667 580.266667 955.733333 580.266667 955.733333 648.533333 904.533333 648.533333C895.095467 648.533333 887.466667 656.1792 887.466667 665.6 887.466667 675.0208 895.095467 682.666667 904.533333 682.666667L972.8 682.666667C982.237867 682.666667 989.866667 675.0208 989.866667 665.6L989.866667 580.266667 1006.933333 580.266667C1016.3712 580.266667 1024 572.6208 1024 563.2 1024 553.7792 1016.3712 546.133333 1006.933333 546.133333" p-id="2619"></path><path d="M904.533333 716.8C895.095467 716.8 887.466667 724.445867 887.466667 733.866667L887.466667 989.866667 853.333333 989.866667 853.333333 665.6C853.333333 656.1792 845.704533 648.533333 836.266667 648.533333L187.733333 648.533333C178.312533 648.533333 170.666667 656.1792 170.666667 665.6 170.666667 675.0208 178.312533 682.666667 187.733333 682.666667L819.2 682.666667 819.2 1006.933333C819.2 1016.354133 826.8288 1024 836.266667 1024L904.533333 1024C913.9712 1024 921.6 1016.354133 921.6 1006.933333L921.6 733.866667C921.6 724.445867 913.9712 716.8 904.533333 716.8" p-id="2620"></path><path d="M221.866667 512C231.287467 512 238.933333 504.354133 238.933333 494.933333L238.933333 426.666667C238.933333 417.262933 246.596267 409.6 256 409.6 265.403733 409.6 273.066667 417.262933 273.066667 426.666667L273.066667 494.933333C273.066667 504.354133 280.712533 512 290.133333 512 299.554133 512 307.2 504.354133 307.2 494.933333L307.2 427.025067 324.164267 87.278933C327.082667 61.678933 344.388267 34.133333 375.466667 34.133333L648.533333 34.133333C679.5776 34.133333 696.900267 61.678933 699.7504 86.186667L716.8 426.666667 716.8 494.933333C716.8 504.354133 724.4288 512 733.866667 512 743.304533 512 750.933333 504.354133 750.933333 494.933333L750.933333 426.666667C750.933333 417.262933 758.5792 409.6 768 409.6 777.4208 409.6 785.066667 417.262933 785.066667 426.666667L785.066667 494.933333C785.066667 504.354133 792.695467 512 802.133333 512 811.5712 512 819.2 504.354133 819.2 494.933333L819.2 426.666667C819.2 398.4384 796.228267 375.466667 768 375.466667 761.122133 375.466667 754.5856 376.866133 748.578133 379.3408L733.7472 83.387733C728.200533 35.072 692.343467 0 648.533333 0L375.466667 0C331.605333 0 295.765333 35.072 290.1504 84.48L275.438933 379.357867C269.431467 376.866133 262.877867 375.466667 256 375.466667 227.771733 375.466667 204.8 398.4384 204.8 426.666667L204.8 494.933333C204.8 504.354133 212.445867 512 221.866667 512" p-id="2621"></path>
            </g>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid_cell)" rx="0" ry="0"/>
        </g>
      <g transform="scale(1)">
        <svg:use xlink:href="#desk" [attr.x]="d.x" [attr.y]="d.y" *ngFor="let d of carriage?.desks; let i = index; let isLast=last;"/>
      </g>
    </svg>
  `,
})
export class SVGPanelComponent{
  @Input() carriage:any;
  constructor(){
  }
}


@Component({
  selector: 'elementspanel',
  template:  `
    <ul>
      <li *ngFor="let d of carriage?.desks; let i = index; let isLast=last;" (click)="d.selected=!d.selected" [ngClass]="{selected:d.selected}">{{i}}. ({{d.x}}, {{d.y}})</li>
    </ul>
  `,
})
export class ElementsPanelComponent{
  @Input() carriage:any;
  constructor(){
  }
}

@Component({
  selector: 'carriagepanel',
  template:  `
    <h3 class="name">{{carriage?.name}}</h3>
    <svgpanel [carriage]="carriage"></svgpanel>
    <elementspanel [carriage]="carriage"></elementspanel>
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
    // console.log(style)
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