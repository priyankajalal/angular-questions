import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-parametrized',
  templateUrl: './pipe-parametrized.component.html',
  styleUrls: ['./pipe-parametrized.component.css']
})
export class PipeParametrizedComponent implements OnInit {

  birthday = new Date(1981, 6, 11);
  constructor() { }

  ngOnInit() {
  }

}
