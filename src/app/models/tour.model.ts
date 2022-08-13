import { StartLocation } from './start-location.model';

export interface Tour {
  id: string;
  name: string;
  difficulty: string;
  summary: string;
  description: string;
  imageCover: string;
  images: Array<string>;
  startDates: Array<string>;
  ratingsAverage: number;
  ratingsQuantity: number;
  duration: number;
  maxGroupSize: number;
  price: number;
  locations: Array<Location>;
  startLocation: StartLocation;
  tourGuides: Array<string>;
}
