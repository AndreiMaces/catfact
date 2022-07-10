import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatFactServiceService {

  constructor(private httpClient: HttpClient) { }

  getFact()
  {
    return this.httpClient.get('https://catfact.ninja/fact');
  }

}
