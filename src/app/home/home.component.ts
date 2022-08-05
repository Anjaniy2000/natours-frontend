import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() toursData:EventEmitter<any>= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  goToTours(){
 this.toursData.emit(true);
  }
}
