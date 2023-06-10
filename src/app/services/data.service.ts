import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brewery } from '../models/brewery/brewery';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  readonly BASE_URL = 'https://api.openbrewerydb.org/v1/breweries';

  getAllBreweries(): Observable<Brewery[]>{
    return this.http.get<any>(this.BASE_URL);
  }

}
