import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { MockComponents } from 'ng-mocks';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
         MatSnackBarModule 
        ],
      declarations: [ 
        ContactComponent,
        MockComponents(
          MatError,
          MatLabel,
          MatFormField,
          MatInput,
          MatButton
        )
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Valid input email', () => {
    // Não definir valor para o email
    component.formGroup.patchValue({'email': ''});
    fixture.autoDetectChanges();
    // Obter a tag mat-error e verificar a mensagem
    let inputEmail = document.getElementsByClassName('email')
    let matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O email é obrigatório');

    // Definir email inválida
    component.formGroup.patchValue({'email': 'teste@quickfast'});
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email')
    matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('Email inválido');

    // Definir email válido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'email': 'teste@quickfast.com'});
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email')
    matError = inputEmail[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });

  it('Valid input name', () => {
    // Não definir valor para o nome
    component.formGroup.patchValue({'name': ''});
    fixture.autoDetectChanges();

    // Obter a tag mat-error e verificar a mensagem
    let inputName = document.getElementsByClassName('name')
    let matError = inputName[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O nome é obrigatório');

    // Definir nome inválido - menor que 3 caracteres
    component.formGroup.patchValue({'name': 'K'});
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName('name')
    matError = inputName[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O nome tem que ser maior que 3 caracteres');

    // Definir nome inválido - mior que 40 caracteres
    component.formGroup.patchValue({'name': 'Klebinhooooooooooooooooooooooooooooooooooooo'});
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName('name')
    matError = inputName[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O nome tem que ser menor que 40 caracteres');

    // Definir nome válido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'name': 'Klebinho'});
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName('name')
    matError = inputName[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });

  it('valid input phone', () => {
    // Não definir valor para o numero
    component.formGroup.patchValue({'phone': ''});
    fixture.autoDetectChanges();

    // Obter a tag mat-error e verificar a mensagem
    let inputPhone = document.getElementsByClassName('phone')
    let matError = inputPhone[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O telefone é obrigatório');

    // Definir telefone inválido
    component.formGroup.patchValue({'phone': '324'});
    fixture.autoDetectChanges();

    inputPhone = document.getElementsByClassName('phone')
    matError = inputPhone[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('Telefone inválido');

    // Definir telefone válido e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'phone': '11999999999'});
    fixture.autoDetectChanges();

    inputPhone = document.getElementsByClassName('phone')
    matError = inputPhone[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);
  });

  it('valid input message', () => {
    // Não definir valor para a message
    component.formGroup.patchValue({'message': ''});
    fixture.autoDetectChanges();

    // Obter a tag mat-error e verificar a mensagem
    let inputMessage = document.getElementsByClassName('message')
    let matError = inputMessage[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('A mensagem é obrigatória');

    // Definir mensagem válida e verificar se não tem a tag mat-error
    component.formGroup.patchValue({'message': 'asdf'});
    fixture.autoDetectChanges();

    inputMessage = document.getElementsByClassName('message')
    matError = inputMessage[0].getElementsByTagName('mat-error')
    expect(matError.length).toEqual(0);

  });
});
