import { Component } from '@angular/core';
import { fade } from "./animations";

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})

export class AppComponent {
  show:boolean = true;
  showVideo:boolean = false;
  toggleInt(e){
    if(e.key === "f" || e.key === "F"){
      console.log("working");
      if(this.show === true){
        this.show = false;
      } else{
        this.show = true;
      }
    }
    if(e.key === "v" || e.key === "V"){
      console.log("working");
      if(this.showVideo === false){
        this.showVideo = true;
      } else{
        this.showVideo = false;
      }
    }
  }
  title = 'Hello World';
}
