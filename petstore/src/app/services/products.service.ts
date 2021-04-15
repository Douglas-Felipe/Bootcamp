import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }

  getProductsHighlights(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      this.http.get<Product[]>(`${environment.apiUrl}v1/products-highlights`).
      subscribe(
        productsHighlights => {
          observer.next(productsHighlights);
          observer.complete();
        },
        () => {
          observer.error('error_on_get_products_highlights');
          observer.complete();
        }
      )
    });
  }

  getProduct(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      this.http.get<Product>(`${environment.apiUrl}v1/product/${id}`).subscribe(
        product => {
          observer.next(product);
          observer.complete();
        },
        error => {
          observer.next(error);
          observer.complete();
        }
      )
    });
  }
}
