import { Injectable } from '@angular/core';
import config from '../config';
import {HttpClientModule, HttpHeaders, HttpClient, HttpParams, HttpErrorResponse   } from "@angular/common/http";
import { Observable, throwError as observableThrowError } from  'rxjs';
import { catchError, tap } from  'rxjs/operators';
import { IAthlete, Athlete } from '../models/athlete';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  _url = 'http://localhost:3000/api/athletes';
  constructor(private http: HttpClient) {

  }
  getAthletes(){
    debugger;
    console.log('${config.API_URL}');
    return this.http
      .get<IAthlete[]>(this._url)
      .pipe(tap(res => JSON.stringify(res)), catchError(this.errorHandler));
  }
  newAthlete(athlete: Athlete){
    debugger;
    return this.http
      .post<any>(this._url, athlete)
      .pipe(catchError(this.errorHandler));
  }
  /*getAthlete(id){
    return this.http
      .get('${config.API_URL}/athletes/${id}')
      .pipe(res => res.json())
  }
  */
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "server Error");
  }
}
