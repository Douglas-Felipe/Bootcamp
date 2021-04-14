import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsService } from './../../services/products.service';
import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { MockComponents } from 'ng-mocks';
import { ProductsServiceMock } from '../../mocks/products-mocks'

import { DashboardComponent } from './dashboard.component';
import { CategoriesFeaturedComponent } from '../../components/categories-featured/categories-featured.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        MockComponents(CategoriesFeaturedComponent),
        MockComponents(ProductItemComponent), 
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
