import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _httpCLient: HttpClient) {
  }
  getAllItems(id:string){
    return this._httpCLient.get(environment.baseURL + `item/${id}`)
  }
}
