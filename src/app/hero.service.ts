import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  public getHeroesByName(name: string): Observable<any> {
    return this.http.get(
      `https://www.superheroapi.com/api.php/3365683880413232/search/${name}`
    );
  }

  public getHeroesById(id: string): Observable<any> {
    return this.http.get(
      `https://www.superheroapi.com/api.php/3365683880413232/${id}`
    );
  }
}