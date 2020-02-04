import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  title = 'New client';
  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public create(): void {
    this.clientService.create(this.client)
      .subscribe(client => {
          this.router.navigate(['/clients']);
          Swal.fire('New Client', `Client ${client.name} created successfully`, 'success');
        }
      );
  }
}
