import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _httpCLient: HttpClient) {
  }
  getAllCharacters(id:string){
    return this._httpCLient.get(environment.baseURL + `pokemon/${id}`)
  }
}
