import { Component } from '@angular/core';
import { RelatedArticleComponent } from "../related-article/related-article.component";

@Component({
  selector: 'app-blog-detail',
  imports: [RelatedArticleComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

}
