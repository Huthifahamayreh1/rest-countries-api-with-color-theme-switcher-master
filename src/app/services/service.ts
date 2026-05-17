import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.com');
  }
  getCountryByName(name: string):Observable<any> {
    return this.http.get(`https://restcountries.com/name/${name}`);
  } 
  getCountryByRegion(region: string):Observable<any>  {
    return this.http.get(`https://restcountries.com/region/${region}`);
  }
getCountryByCode(code: string):Observable<any> {
    return this.http.get(`https://restcountries.com/alpha/${code}`);
  }
  getCountryByCurrency(currency: string):Observable<any> {
    return this.http.get(`https://restcountries.com/currency/${currency}`);
  }
  getCountryByLanguage(language: string):Observable<any> {
    return this.http.get(`https://restcountries.com/lang/${language}`);
  }
  getCountryByCapital(capital: string):Observable<any> {
    return this.http.get(`https://restcountries.com/capital/${capital}`);
  }
  getCountryBySubregion(subregion: string):Observable<any> {
    return this.http.get(`https://restcountries.com/subregion/${subregion}`);
  }
  getCountryByDemonym(demonym: string):Observable<any> {
    return this.http.get(`https://restcountries.com/demonym/${demonym}`);
  }
getCountryByPopulation(population: number):Observable<any> {
    return this.http.get(`https://restcountries.com/population/${population}`);
  }
  getCountryByArea(area: number):Observable<any> {
    return this.http.get(`https://restcountries.com/area/${area}`);
  }
  getborderCountries(border: string):Observable<any> {
    return this.http.get(`https://restcountries.com/border/${border}`);
  }

}
