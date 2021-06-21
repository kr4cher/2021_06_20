import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from '@flight-workspace/passenger-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Passenger[]> {
    const url = 'http://www.angular.at/api/passenger';
    return this.httpClient.get<Passenger[]>(url);
  }
}
