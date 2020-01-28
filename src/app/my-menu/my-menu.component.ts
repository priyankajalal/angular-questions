import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent implements OnInit {
  @Input() menuItems=[];
  constructor() { }

  ngOnInit() {
  }

}
