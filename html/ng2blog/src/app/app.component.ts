import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
  <c-top></c-top>
  <div class="main">
  	<c-left></c-left>
  	<c-main></c-main>
  	<div style="clear:both;"></div>
  </div>
  <c-bottom></c-bottom>
  `
})
export class AppComponent { }

