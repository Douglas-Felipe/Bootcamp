import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductItemComponent } from 'src/app/components/product-item/product-item.component';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsServiceMock } from 'src/app/mocks/products-mocks';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductsComponent,
        MockComponents(ProductItemComponent)
       ],
       providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show products in html', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByTagName('app-product-item').length).toEqual(1);
  });

  it('should test component title', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div h2').textContent).toContain('Lista de produtos');
  });

});
