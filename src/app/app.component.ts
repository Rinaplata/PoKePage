import { Component } from '@angular/core';
import { ViewSelectionService } from './view-selection-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'rina';
=======
  constructor(public  viewSelectionService: ViewSelectionService) { }
  title = 'Sasori Kun Project';
>>>>>>> main
  numero: number = 16
}
