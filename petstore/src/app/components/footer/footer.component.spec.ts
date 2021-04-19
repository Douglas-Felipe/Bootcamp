import { MatCard } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';
import { ParametersServiceMock } from './../../mocks/parameters-mock';
import { ParametersService } from 'src/app/services/parameters.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FooterComponent,
        MockComponents(
          MatCard
        )],
      providers: [
        {
          provide: ParametersService,
          useClass: ParametersServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check the location', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.address').textContent).toContain('Avenida das Nações Unidas, 18801 - Novámerica Office - Conj.')
  });

  it('Check the phone number', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fone-number').textContent).toContain('+55 (11) 4063-4100')
  });

  it('check for social media', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.social-link')).toBeTruthy()
  });


});
