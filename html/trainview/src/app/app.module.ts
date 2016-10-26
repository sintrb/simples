import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

import { 
  AppComponent,
  LoaddingComponent

} from './app.components'



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ 
  	AppComponent,
    LoaddingComponent

  ],
  bootstrap:    [ AppComponent ],
  providers:	    [ AppService ],
})

export class AppModule { }