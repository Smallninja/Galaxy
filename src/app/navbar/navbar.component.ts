import { Component, OnInit } from '@angular/core';
import { fade } from "../animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [ fade ]
})


export class NavbarComponent implements OnInit {

  constructor() {  }

  ngOnInit(){
    
  }
}