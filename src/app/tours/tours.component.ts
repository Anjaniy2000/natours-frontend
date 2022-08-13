import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../models/tour.model';
import { ToursService } from '../services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent implements OnInit {
  toursData: Array<Tour> = [];

  constructor(private tours: ToursService) {
    this.getAllTours();
  }

  ngOnInit(): void {}

  getAllTours() {
    this.tours.getAllTours().subscribe((data) => {
      console.log(data);
      this.toursData = data;
    });
  }
}
