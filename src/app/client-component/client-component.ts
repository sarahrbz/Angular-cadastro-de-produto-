import { Component } from '@angular/core';
import { Clients } from '../client';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrl: './client-component.css',
})
export class ClientComponent {

  clients: Clients[] = [];
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroupClient = formBuilder.group({
      id: [''],
      name: [''],
      age: [''],
      gender: [''],
      phone: ['']
    });

  }

  save() {
    this.clients.push(this.formGroupClient.value);
    this.formGroupClient.reset();
  }

}
