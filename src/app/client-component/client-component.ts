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
  formGroupClient: FormGroup;

  clients = signal<Client[]>([]);


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
    this.service.getAllClients().subscribe(
          {
              next: json => this.clients.set(json)
          }
      );

  }

  save() {
    this.service.save(this.formGroupClient.value).subscribe(
     {
       next: json => {
          this.clients.update(clients => [...clients, json]);
          this.formGroupClient.reset();
       }
     }
    );

  }

   delete(client: Client) {
    this.service.delete(client).subscribe(
      {
        next: () => {
          this.clients.update(clients => clients.filter(c => c.id !== client.id));
        }
      }
    )
  }

}
