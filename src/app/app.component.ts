import { Component } from '@angular/core';
import { ViewSelectionService } from './view-selection-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public  viewSelectionService: ViewSelectionService) { }
  title = 'rina';
  numero: number = 16
}
