import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleContentPipe } from './app.pipe';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

import { 
	TopComponent, BottomComponent, LeftComponent, MainComponent, MenuComponent,
	CornerComponent, LoaddingComponent, ArticleComponent, ListComponent
} from './components'



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ 
  	AppComponent, TopComponent, BottomComponent, LeftComponent, MainComponent, MenuComponent, 
  	CornerComponent, LoaddingComponent, ArticleComponent, ListComponent,


  	ArticleContentPipe
  ],
  bootstrap:    [ AppComponent ],
  providers:	    [ AppService ],
})

export class AppModule { }

