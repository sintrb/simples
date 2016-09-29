import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'articleContentPipe', pure: false})
export class ArticleContentPipe implements PipeTransform {
  transform(article) {
    return article.content
  }
}