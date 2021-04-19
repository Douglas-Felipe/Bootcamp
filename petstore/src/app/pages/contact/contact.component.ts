import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup: FormGroup;
  public EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  setForDefaultValues() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email:['', [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]],
      phone: [''],
      message:['']
    });
  }
}
