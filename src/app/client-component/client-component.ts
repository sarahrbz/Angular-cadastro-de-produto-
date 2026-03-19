import { Component, OnInit, signal } from '@angular/core';
import { Client } from '../client';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../client-service';

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrl: './client-component.css',
})
export class ClientComponent implements OnInit{ // tem que digitar implements OnInit e dps CTRL + . no ClientComponent para implementar o OnInit

  clients = signal<Client[]>([]);
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ClientService) {

    this.formGroupClient = formBuilder.group({
      id: [''],
      name: [''],
      age: [''],
      gender: [''],
      phone: ['']
    });

  }
  ngOnInit(): void {

  }

  save() {
    //this.clients.push(this.formGroupClient.value);
    this.formGroupClient.reset();
  }

}
