import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Categories } from './../interfaces/categories';
import { CategoriesService } from './categories.service';
import { HttpClient } from '@angular/common/http';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CategoriesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test get categories', () => {
    service.getCategories().subscribe(categories => {
      expect(categories.length).toEqual(2);
      expect(categories[0].name).toEqual('Ração');
    })

    // Vamos conferir qual url foi chamada pelo metodo getCategories()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/categories');

    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

    // Vamos colocar aqui a resposta da requisição
    const categories: Array<Categories> = [
      {id: 'dasdasd', name: 'Ração', description: '', subcategories: ['ração seca'], url: ''},
      {id: 'dasdazd', name: 'Brinquedos', description: '', subcategories: ['pelucia'], url: ''}
    ]
    req.flush(categories);
  });
});
