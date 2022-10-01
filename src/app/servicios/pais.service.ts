import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {



  constructor(private http: HttpClient) { }


  traerPaises()
  {
    return this.http.get('https://restcountries.com/v2/all');
  }

}
