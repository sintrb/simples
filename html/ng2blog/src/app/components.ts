import { Component } from '@angular/core';

@Component({
  selector: 'c-top',
  template: `
  <div>
  	<h1>页面顶</h1>
  </div>
  `
})
export class TopComponent { }


@Component({
  selector: 'c-bottom',
  template: `
  <div>
  	<h1>页面底部</h1>
  </div>
  `
})
export class BottomComponent { }


@Component({
  selector: 'c-banner',
  template: `
  <div>
  	导航条
  </div>
  `
})
export class BannerComponent { }

@Component({
  selector: 'c-index',
  template: `
  <c-top></c-top>
  <c-banner></c-banner>
  <c-bottom></c-bottom>
  `
})
export class IndexComponent { }


