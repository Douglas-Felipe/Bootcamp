import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;

  public swiperConfig: SwiperOptions = {
    direction: 'horizontal', //Direção que os sliders vão seguir
    keyboard: true, //Fala que o slide passara as fotos com as setas do teclado
    grabCursor: true, //Quando passar o mouse no slide sera trocado o cursor, permitindo arrastar para o proximo slide
    pagination: { el: '.swiper-pagination', clickable: true, } //Aqui definimos a paginação dele, no caso são as bolinhas que ficam na parte inferior do slide
  };
  

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id).subscribe(product => this.product = product);
  }
}
