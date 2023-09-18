import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { CharacterService } from './service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = []

  constructor(
    private _characterService: CharacterService
  ){}

  ngOnInit(): void{
    this.getCharacters()
  }

  getCharacters(){

    for (let index = 1; index < 21; index++) {
      this._characterService.getAllCharacters(index.toString()).subscribe((response: any)=>{
        if(response){
          this.characters.push(response)
          console.log(this.characters)
        }else{
          this.characters = []
          console.log("e3se", response)
        }
      })

    }



  }
}
