import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  title = 'New client';
  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadClient();
  }

  public create(): void {
    this.clientService.create(this.client)
      .subscribe(client => {
          this.router.navigate(['/clients']);
          Swal.fire('New Client', `Client ${client.name} created successfully`, 'success');
        }
      );
  }

  update(): void {
    this.clientService.update(this.client)
      .subscribe(client => {
        this.router.navigate(['/clients']);
        Swal.fire('Client updated', `Client ${client.name} updated successfully`, 'success');
      });
  }

  loadClient(): void {
    this.activatedRoute.params.subscribe(params => {
        const id = params.id;
        if (id) {
          this.clientService.getClient(id).subscribe((client) => this.client = client);
        }
      }
    );
  }

}
