import { MatIcon } from '@angular/material/icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';

import { MockComponents } from 'ng-mocks';
import { ProductsServiceMock } from './../../mocks/products-mocks';

import { ProductsService } from './../../services/products.service';
import { ProductComponent } from './product.component';

import { MatCard, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { SwiperComponent } from 'ngx-useful-swiper';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductComponent,
        MockComponents(
          RouterLink,
          MatCard,
          MatCardTitle,
          MatCardSubtitle,
          MatIcon,
          SwiperComponent
        )
       ],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(id: string) {
                  return 
                }
              }
            }
          }
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the title and priece of a product', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('product-name').item(0).innerHTML).toContain('Product');

    expect(html.getElementsByClassName('value-without-promotional').item(0).innerHTML).toContain('204.9');
  });

});
