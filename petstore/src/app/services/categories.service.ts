import { Categories } from './../interfaces/categories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Categories[]> {
    return new Observable<Categories[]>(observer => {
        // Faça o importe do environment para poder adicionar a url da aplicação
        this.http.get<Categories[]>(`${environment.apiUrl}v1/categories`).subscribe(
          categories => {
            observer.next(categories);
            observer.complete();
          },
          () => {
            observer.error('error_on_get_categories');
            observer.complete();
          }
        )
    });
  }
  
}
