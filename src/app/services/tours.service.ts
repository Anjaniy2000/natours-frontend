import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour.model';

@Injectable({
  providedIn: 'root',
})
export class ToursService {
  constructor(private http: HttpClient) {}

  getAllTours(): Observable<Array<Tour>> {
    return this.http.get<Array<Tour>>(
      'http://localhost:8083/api/tour/getAllTours'
    );
  }
}
