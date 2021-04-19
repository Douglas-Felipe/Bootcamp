import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Parameters } from '../interfaces/parameters'


@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor( private http: HttpClient ) { }

  getParameters(): Observable<Parameters> {
    return new Observable<Parameters>(observer => {
      this.http.get<Parameters>(`${environment.apiUrl}v1/parameters`).subscribe(
        parameters => {
          observer.next(parameters);
          observer.complete();
        },
        () => {
          observer.error('error_on_get_parameters');
          observer.complete();
        }
      )
    });
  }

}
