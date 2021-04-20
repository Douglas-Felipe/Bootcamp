import { Product, AnimalType, ProductsGetResponse } from './../interfaces/product';
import { Observable } from 'rxjs';


export class ProductsServiceMock {

    product: Product = {
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
    };

    getProductsHighlights(): Observable<Product[]> {
        return new Observable<Product[]>(observer => {
            observer.next([
                this.product,
                {
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
            ]);
            observer.complete()
        });
    }


    getProduct(id: string): Observable<Product> {
        return new Observable<Product>(observer => {
            observer.next(this.product);
            observer.complete();
        });

    }

    products: Array<Product> = [
        this.product,
        {
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
    ]
    getProducts() {
        return new Observable<ProductsGetResponse>(observer => {
            observer.next({
                products: [this.product],
                cursor: ''
            }
            );
            observer.complete();
        });
    }
}