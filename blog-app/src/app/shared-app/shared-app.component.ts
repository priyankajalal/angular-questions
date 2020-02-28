import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared/shared.service";
import {Article} from "../shared/article.interface";

@Component({
  selector: 'app-shared-app',
  templateUrl: './shared-app.component.html',
  styleUrls: ['./shared-app.component.css']
})
export class SharedAppComponent implements OnInit {

  detail1: Article = {
    "userId": 0,
    "id": 0,
    "title": "XXX",
    "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  }

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {

    this.sharedService.on('SelectArticleDetail', (data: Article) => {
      this.detail1 = data;
    });
  }

}
