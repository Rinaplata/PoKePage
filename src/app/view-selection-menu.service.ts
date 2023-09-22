import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewSelectionService {
  selectedView = 'characters'; // Valor predeterminado

  constructor() { }

  // Puedes agregar métodos relacionados con la selección aquí
}
