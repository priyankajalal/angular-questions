import { Component, OnInit } from '@angular/core';
import {UtilityService} from "../utility.service";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private utilitysService: UtilityService) {

    this.utilitysService.subject$.subscribe(data =>this.username = data)
  }

  username;

  ngOnInit() {
  }

  updateUser(data){
    this.username = data.value;
  }
}
