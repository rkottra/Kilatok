import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { Rating } from '../rating';
import { ViewPoint } from '../view-point';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  public viewpoints : ViewPoint[] = [];
  public rating : Rating = new Rating();
  public hiba:string = "";

  constructor (private backend:BackendService) {
    this.backend.getViewpoints().subscribe(
      (data) => {
        this.viewpoints = data;
      }
    );
  }

  sendRating() {
    this.backend.postRating(this.rating).subscribe( {
      next: result => {
        alert("A kilátó eddigi értékelése: "+result.average+", "+result.count+" értékelés alapján.");
      }, 
      error: httperror => {
        console.log(httperror);
        this.hiba = httperror.error.message;
      }
    }
    )
  }

}
