import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/index';

/**
 * This class represents the lazy loaded DetailsComponent.
 */
@Component({
  selector: 'sd-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  public loading: boolean = false;
  public errorMessage: string;

  constructor(public apiService: ApiService, public route: ActivatedRoute, public changeDetectorRef: ChangeDetectorRef, public router: Router) {

    this.apiService.getArtistsByName("worakls").subscribe(data => {
      this.apiService.searchArtists = data.artists.items;

      for(let item of this.apiService.searchArtists) {
        if(localStorage.getItem(item.name) == "favorite") {
          item.favorite = true;
        }
        else {
          item.favorite = false;
        }
      }
    });

  }

}
