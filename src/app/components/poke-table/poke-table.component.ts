import { Component,OnInit } from '@angular/core';
import { Items } from './model/items';
import { ItemsService } from './service/item.service';
import { AppModule } from '../../AppModule';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent {
  items: Items[] = []
  dataSource: any;
  constructor(
    private _itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems() {
    for (let index = 1; index < 50; index++) {
      this._itemsService.getAllItems(index.toString()).subscribe((response: any) => {
        if (response) {
          this.items.push(response)
          this.dataSource = new MatTableDataSource(this.items);
          console.log(this.items)
        } else {
          this.items = []
          console.log("e3se", response)
        }
      })
    }
  }


}
