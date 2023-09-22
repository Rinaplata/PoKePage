import { Component } from '@angular/core';
import { ViewSelectionService } from '../../view-selection-menu.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})
export class AppNavBarComponent {
  constructor(private viewSelectionService: ViewSelectionService) { }

  selectCharacters() {
    this.viewSelectionService.selectedView = 'characters';
  }

  selectPokeTable() {
    this.viewSelectionService.selectedView = 'poke-table';
  }

}
