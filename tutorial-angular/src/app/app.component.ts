import {Component} from '@angular/core';
import { MaterialFormTestComponent } from './material-form-test/material-form-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuItems = [{"link": "/", "name": "Home"},
    {"link": "/employee", "name": "Employee"},
    {"link": "/test_directive", "name": "Directive"},
    {"link": "/register", "name": "Emp Register"},
    {"link": "/search", "name": "Emp Search"},
    {"link": "/reactive-form", "name": "Form(Reactive)"},
    {"link": "/form-practice", "name": "Form Practice"},
    {"link": "/material-form", "name": "Form(Material)"}
  ];
}
