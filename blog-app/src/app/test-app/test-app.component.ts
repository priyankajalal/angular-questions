import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent implements OnInit {

  symbolInput = "AAPL";
  myTime = "10:29";

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routeMe() {
    this.router.navigate(["/test2"])
  }

  routeMeWithParams() {
    this.router.navigate(["/test3", "1"])
  }

  SymbolClikedOnNews(event) {
    console.log(`Some event happened on child news ${event}`)
  }
}
