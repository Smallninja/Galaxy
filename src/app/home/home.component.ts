import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { fade } from "../animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ fade ]
})
export class HomeComponent implements OnInit {

  list: string[] = ["Joseph", "Adam", "Alicia", "Alyssa"];

  delete(item){
    this.list.splice(item, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}