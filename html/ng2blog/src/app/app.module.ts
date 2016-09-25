import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { TopComponent, BottomComponent, IndexComponent, BannerComponent } from './components'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopComponent, BottomComponent, IndexComponent, BannerComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

