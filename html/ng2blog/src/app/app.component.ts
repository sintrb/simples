import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
  <c-top (selected)="onSelected($event);"></c-top>
  <div class="main">
    {{selected?.title}}
    <c-left></c-left>
    <c-main></c-main>
    <div style="clear:both;"></div>
  </div>
  <c-bottom></c-bottom>
  `
})
export class AppComponent {
  selected = null
  onSelected($event){
    this.selected = $event;
  }
}

