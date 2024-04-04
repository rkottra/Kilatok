import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location';
import { Rating } from './rating';
import { ViewPoint } from './view-point';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }

  getLocation():Observable<Location[]> {
    return this.http.get<Location[]>("https://localhost:7131/api/locations");
  }

  getViewpointsByLocationName(locationName:string):Observable<ViewPoint[]> {
    return this.http.get<ViewPoint[]>("https://localhost:7131/api/locations/"+locationName+"/viewpoints");
  }

  getViewpoints():Observable<ViewPoint[]> {
    return this.http.get<ViewPoint[]>("https://localhost:7131/api/viewpoints");
  }

  postRating(rating:Rating):Observable<any> {
    return this.http.post("https://localhost:7131/api/rate", rating);
  }
}
