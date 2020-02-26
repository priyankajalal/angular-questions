import {Component, OnInit} from '@angular/core';
import {Joke} from "../../models/Joke";

@Component({
  selector: 'app-joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent implements OnInit {

  jokes: Joke[] = [];
  newJoke: Joke;

  constructor() {
    this.newJoke = new Joke("", "");
  }

  addJoke() {
    let jokeCopied: Joke = Object.assign({}, this.newJoke);
    this.jokes.unshift(jokeCopied);
    //this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteJoke() {
    this.jokes = []
  }

  ngOnInit(): void {
  }

}
