import { Component, OnInit } from '@angular/core';
import {UtilityService} from "../utility.service";

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username;

  constructor(private utilitysService: UtilityService) {
    this.utilitysService.subject$.subscribe(data => this.username = data)
  }

  ngOnInit() {
  }

  updateUser(data){
    // this.username = uname.value;
    this.utilitysService.subject$.next(data.value);
  }
}
