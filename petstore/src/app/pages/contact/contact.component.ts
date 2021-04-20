import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup: FormGroup;
  public EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  public PHONE_REGEXP: RegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;


  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  setForDefaultValues() {
    this.formGroup = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]],
      phone: ['', [Validators.required, Validators.pattern(this.PHONE_REGEXP)]],
      message:['',[Validators.required]]
    });
  }

  openSnackBar(message:string, action?: string) {
   this._snackBar.open(message, action,{
     duration: 2000,
   });
 }

  sendForm() {
    let message = ["Formulário inválido! Verifique os campos", "Formulário enviado com sucesso"];

    if (this.formGroup.valid) {
      this.openSnackBar(message[1]);
      this.formGroup.reset()
    }
    else{
      this.openSnackBar(message[0]);
    }
  }
}
