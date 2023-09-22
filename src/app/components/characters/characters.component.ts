import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { CharacterService } from './service/character.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  filterData='';

  constructor(
    private _characterService: CharacterService
  ){}

  ngOnInit(): void{
    this.getCharacters()
  }

  getCharacters(){
    var pokemon;
    for (let index = 1; index < 300; index++) {
      this._characterService.getAllCharacters(index.toString()).subscribe((response: any)=>{
        if(response){
          pokemon = {
            name: response.name,
            sprite: response.sprites.front_default,
            type: response.types[0].type.name,
          }
          this.characters.push(pokemon)
        }else{
          this.characters = []
        }
      })

    }



  }
}
