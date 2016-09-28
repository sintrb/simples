import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { 
	TopComponent, BottomComponent, LeftComponent, MainComponent, MenuComponent,
	CornerComponent, LoaddingComponent, ArticleComponent, ListComponent
} from './components'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent, TopComponent, BottomComponent, LeftComponent, MainComponent, MenuComponent, 
  	CornerComponent, LoaddingComponent, ArticleComponent, ListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

