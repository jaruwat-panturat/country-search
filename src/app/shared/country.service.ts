import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = 'https://restcountries.eu/rest/v2/all';
 
  constructor(private _http:HttpClient) { }

  getCountries(){
    return this._http.get(this.url).pipe(
      map(res => res)
    )
  }

}

