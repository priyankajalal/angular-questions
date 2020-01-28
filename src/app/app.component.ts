import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuItems =[{"link":"/","name":"Home"},{"link":"/employee","name":"Employee"},{"link":"/test_directive","name":"Directive"}];
}
