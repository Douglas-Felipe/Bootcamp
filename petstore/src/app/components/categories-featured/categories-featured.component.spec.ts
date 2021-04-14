import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFeaturedComponent } from './categories-featured.component';
import { CategoriesServiceMock } from 'src/app/mocks/categories-mocks';
import { CategoriesService } from './../../services/categories.service';




describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFeaturedComponent ],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div h2').textContent).toContain('Categorias em destaque')
  });

  it('should check category card item count in HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-item').length).toEqual(2);
  });

  it('should check the name of the first category in the HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-name').item(0).innerHTML).toContain('Ração');
  });

});
