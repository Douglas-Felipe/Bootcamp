import { RouterLink } from '@angular/router';
import { AnimalType, Product } from './../../interfaces/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { MatIcon } from '@angular/material/icon';
import { MockComponents, MockDirective } from 'ng-mocks';
import { MatCardContent, MatCardImage, MatCardTitle } from '@angular/material/card';

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

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductItemComponent,
        MockComponents(
          MatIcon,
          MatCardContent,
          MatCardTitle,
          MatCardImage
          ),
        MockDirective( RouterLink )
      ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show five icon stars in html', () => {
    const html = fixture.nativeElement;
    // Get all matIcons
    const matIcons = document.getElementsByTagName('mat-icon');
    // Check matIcons count
    expect(matIcons.length).toEqual(5);
    // Check first mat icon
    expect(matIcons[0].textContent.trim()).toEqual('star');
  });

  it('Check the product name in html', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByTagName('mat-card-title').item(0).innerHTML).toContain('Product');
  });

  it('Check if the original value and the promotional value are in HTML', () =>{
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('value').item(0).innerHTML && html.getElementsByClassName('promotional-value').item(0).innerHTML).toBeTruthy()
  });


  it('should show stars with 3.5 rating star', () => {
    // Atualizando as estrelas do produto
    component.product.rating_stars = 3.5
    // Solicitando para que o HTML seja atualizado
    fixture.autoDetectChanges();

    const html = fixture.nativeElement;
    // Obtendo todos os matIcons no html
    const matIcons = document.getElementsByTagName('mat-icon');
    // Checando todos os icones
    expect(matIcons[0].textContent.trim()).toEqual('star');
    expect(matIcons[1].textContent.trim()).toEqual('star');
    expect(matIcons[2].textContent.trim()).toEqual('star');
    expect(matIcons[3].textContent.trim()).toEqual('star_half');
    expect(matIcons[4].textContent.trim()).toEqual('star_border');
  });

});
