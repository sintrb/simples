import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { TopComponent, BottomComponent, LeftComponent, MainComponent } from './components'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopComponent, BottomComponent, LeftComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

