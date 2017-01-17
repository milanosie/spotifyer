import { Component, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { ActivatedRoute } from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the lazy loaded PropPhaseComponent.
 */
@Component({
  selector: 'sd-propphase',
  templateUrl: './propphase.component.html',
  styleUrls: ['./propphase.component.scss']
})
export class PropPhaseComponent {
    public favorites : any;

    constructor(public apiService: ApiService, public route: ActivatedRoute, public overlay: Overlay, public vcRef: ViewContainerRef, public modal: Modal) {
      overlay.defaultViewContainer = vcRef;
    }

  public updateSearch(search) {
    console.log(search);
    this.apiService.getArtistsByName(search).subscribe(data => {
      this.apiService.searchArtists = data.artists.items;
      this.updateFavorites();
    });
  }

  public favoriteArtist(name) {
    localStorage.setItem(name, "favorite");
    this.updateFavorites();
  }

  public unfavoriteArtist(name) {
    localStorage.removeItem(name);
    this.updateFavorites();
  }

  private updateFavorites() {
    for(let item of this.apiService.searchArtists) {
      if(localStorage.getItem(item.name) == "favorite") {
        item.favorite = true;
      }
      else {
        item.favorite = false;
      }
    }
  }

}
