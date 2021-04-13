import { Observable } from 'rxjs';
import { Categories } from '../interfaces/categories';

export class CategoriesServiceMock {

    getCategories(): Observable<Categories[]> {
        return new Observable<Categories[]>(observer => {
            observer.next([
                {id: 'dasdas', name: 'Ração', description: '', subcategories: ['ração seca'], url: ''},
                {id: 'dasdas', name: 'Brinquedos', description: '', subcategories: ['pelucia'], url: ''}
            ]);
            observer.complete()
        });
    }

}