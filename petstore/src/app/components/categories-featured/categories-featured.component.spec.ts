import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFeaturedComponent } from './categories-featured.component';
import { CategoriesServiceMock } from 'src/app/mocks/categories-mocks';
import { MockComponents } from 'ng-mocks';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CategoriesService } from './../../services/categories.service';



describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CategoriesFeaturedComponent,
        MockComponents(
          DashboardComponent,
        )
      ],
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
});
