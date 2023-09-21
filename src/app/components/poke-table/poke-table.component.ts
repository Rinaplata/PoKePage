import { Component } from '@angular/core';
import { Items } from './model/items';
import { ItemsService } from './service/item.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent {
  items: Items[] = []

  constructor(
    private _itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems() {
    for (let index = 1; index < 21; index++) {
      this._itemsService.getAllItems(index.toString()).subscribe((response: any) => {
        if (response) {
          this.items.push(response)
          console.log(this.items)
        } else {
          this.items = []
          console.log("e3se", response)
        }
      })
    }
  }
}
