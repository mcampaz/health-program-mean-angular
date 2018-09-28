import { Injectable } from '@angular/core';
import config from '../config';
import { HttpHeaders, HttpClient, HttpErrorResponse   } from "@angular/common/http";
import { Observable, throwError as observableThrowError } from  'rxjs';
import { catchError, tap } from  'rxjs/operators';
import { IAthlete, Athlete } from '../models/athlete';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  _url = 'http://localhost:3000/api/athletes';

  constructor(private http: HttpClient) {
  }

  newAthlete(athlete: Athlete): Observable<Athlete> {
    debugger;
    return this.http
      .post<Athlete>(this._url, athlete)
      .pipe(catchError(this.errorHandler));
  }

  getAthletes() {
    return this.http
      .get<IAthlete[]>(this._url)
      .pipe(tap(res => JSON.stringify(res)), catchError(this.errorHandler));
  }

  getAthlete(id: string): Observable<any> {
    return this.http
      .get<Athlete>(this._url + '/${id}', httpOptions)
      .pipe(tap(res => JSON.stringify(res)), catchError(this.errorHandler));
  }

  postAthlete(data): Observable<any> {
    return this.http.post(this._url, data, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updateAthlete(data): Observable<any> {
    return this.http.put(this._url, data, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  deleteAthlete(id: string): Observable<{}> {
    const url = this._url + '/${id}';
    return this.http.delete(url, httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "server Error");
  }
}
