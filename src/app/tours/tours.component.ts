import { Component, OnInit } from '@angular/core';
import { ToursService } from '../services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent implements OnInit {
  constructor(private tours: ToursService) {
    this.getAllTours();
  }

  ngOnInit(): void {}

  getAllTours() {
    this.tours.getAllTours().subscribe((data: any) => {
      console.warn(data);
    });
  }
}
