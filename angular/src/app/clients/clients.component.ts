import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {ClientService} from './client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );
  }

  delete(client: Client): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: `You will eliminate the customer ${client.name} ${client.surname} permanently`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clientService.delete(client.id).subscribe(
          response => {
            this.clients = this.clients.filter(cli => cli !== client);
            swalWithBootstrapButtons.fire(
              'Client deleted!',
              `Client ${client.name} ${client.surname} deleted successfully`,
              'success'
            );
          }
        );
      }
    });
  }
}
