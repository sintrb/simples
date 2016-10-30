import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

import { 
  AppComponent,
  LoadingComponent,
  CarriageComponent,
  TrainComponent,
  CarriagePanelComponent

} from './app.components'



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ 
  	AppComponent,
    LoadingComponent,
    CarriageComponent,
    TrainComponent,
    CarriagePanelComponent

  ],
  bootstrap:    [ AppComponent ],
  providers:	    [ AppService ],
})

export class AppModule { }
