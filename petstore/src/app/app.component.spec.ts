import { TestBed } from '@angular/core/testing';
import { MatIcon} from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponents } from 'ng-mocks';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        MockComponents(
          MatToolbar,
          MatSidenav,
          MatSidenavContent,
          MatSidenavContainer,
          MatIcon,
          FooterComponent
        )
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'petstore'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('petstore');
  });

  it('should render title in mat-toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-sidenav-content span').textContent).toContain('PetStore');
  });
});
