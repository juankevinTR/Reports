import {Injectable} from '@angular/core';
import {Client} from './client';
import {CLIENTS} from './clients.json';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint = 'http://localhost:8080/api/clients';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    // return of(CLIENTS);
    // return this.http.get<Client[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Client[])
    );
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {headers: this.httpHeaders});
  }

  getClient(id): Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`);
  }

  update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlEndPoint}/${client.id}`, client, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Client>{
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

}
