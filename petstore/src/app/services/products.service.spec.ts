import { ProductsServiceMock } from './../mocks/products-mocks';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { AnimalType, Product } from './../interfaces/product';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ProductsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test get productsHighlights', () => {
    service.getProductsHighlights().subscribe(productsHighlights => {
      expect(productsHighlights.length).toEqual(2);
      expect(productsHighlights[0].name).toEqual('Ração');
    })

    // Vamos conferir qual url foi chamada pelo metodo getCategories()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products-highlights');

    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

    // Vamos colocar aqui a resposta da requisição
    const categories: Array<Product> = [
      { id: 'dasdasd', name: 'Ração', description: '', value: 0, promotional_value: 0, featured_image: '', images: [''], videos: [''], rating_stars: 0, rating_count: 0, installment_available: true, installment_count: 0, featured: true, animal_type: null, category: '',subcategory: '', status: '', url: '', created_at: '' },
      { id: 'dasdasd', name: 'Ração', description: '', value: 0, promotional_value: 0, featured_image: '', images: [''], videos: [''], rating_stars: 0, rating_count: 0, installment_available: true, installment_count: 0, featured: true, animal_type: null, category: '',subcategory: '', status: '', url: '', created_at: ''  }

    ]
    req.flush(categories);
  });

  it('should get product', () => {
    service.getProduct('ID1').subscribe(product => {
      expect(product.name).toEqual('Product');
    })

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/ID1');

    expect(req.request.method).toEqual('GET')

    const product: Product = {
      name: "Product",
      description: "Product",
      value: 204.9,
      promotional_value: 184.41,
      featured_image: "imageUrl",
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 424,
      installment_available: true,
      installment_count: 2,
      featured: true,
      category: "Medicina e Sa\u00fade",
      status: "asd",
      subcategory: "Antipulgas e Carrapatos",
      animal_type: AnimalType.Dog,
      url: "/url",
      created_at: "2021-04-12 21:28:35.881119+00:00",
      id: "EJf7MU4hRS59rlLMJrdh"
  }

    req.flush(product);
  });

});
