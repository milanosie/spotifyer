import { Component } from '@angular/core';
import { ApiService } from '../api/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'sd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public isMenuCollapsed: boolean = false;
  public profileImageSource: string = 'https://www.drupal.org/files/profile_default.png';
  public menuActive: boolean = false;
  public settingsMenuActive: boolean = false;

  constructor( private apiService: ApiService) {
    
  }

  public toggleSettingsMenu() {
    this.settingsMenuActive = !this.settingsMenuActive;
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (this.isMenuCollapsed) {
      document.getElementById('sd-app').className = 'menu-collapsed';
    } else {
      document.getElementById('sd-app').className = '';
    }
  }

  public toggleProfileMenu() {
    this.menuActive = !this.menuActive;
  }
}
