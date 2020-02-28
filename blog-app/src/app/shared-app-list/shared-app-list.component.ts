import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../shared/shared.service";
import {Article} from "../shared/article.interface";
import {EventData} from "../shared/event.class";

@Component({
  selector: 'app-shared-app-list',
  templateUrl: './shared-app-list.component.html',
  styleUrls: ['./shared-app-list.component.css']
})
export class SharedAppListComponent implements OnInit {
  articles: Article[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "Test Vinod",
      "body": "My Body vinod"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "Test Priyanka",
      "body": "My Body Priyanka"
    }

  ];

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  viewArticle1(article: Article) {
    this.sharedService.emit(new EventData('SelectArticleDetail', article));
  }


}
