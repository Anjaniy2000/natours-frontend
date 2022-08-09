import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'natours-frontend';
  opentours:boolean=false;
  ngOnInit(): void {
    console.log(this.opentours);
  }
  toursInfo(event:any){
    if(event){
this.opentours=true;
    }
  }
}
