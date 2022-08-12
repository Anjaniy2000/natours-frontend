import { startLocation } from "./startLocation.model";

export interface Tour {
    id:string;
    name:string;
    difficulty:string;
    summary:string;
    description:string;
    imageCover:string;
    image:string[],
    startDates:string[];
    ratingsAverage:number;
    ratingsQuantity:number;
    duration:number;
    maxGroupSize:number;
    price:number;
    locations:Array<Location>;
    startLocation:startLocation;
    tourGuides:string[]

}
