/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  delayFirstFlight,
  flightsLoaded,
  loadFlights,
  updateFlight,
} from '../+state/flight-booking.actions';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$: Observable<Flight[]>;

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true,
  };

  constructor(
    private flightService: FlightService,
    private store: Store<FlightBookingAppState>
  ) {}

  ngOnInit() {
    this.flights$ = this.store.select((tree) => tree.flightBooking.flights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(
      loadFlights({ from: this.from, to: this.to, urgent: this.urgent })
    );

    // this.flightService.load(this.from, this.to, this.urgent);

    // this.flightService.find(this.from, this.to, this.urgent).subscribe(
    //   (flights) => this.store.dispatch(flightsLoaded({ flights })),
    //   (error) => {
    //     console.error('error', error);
    //   }
    // );
  }

  delay(): void {
    this.store.dispatch(delayFirstFlight());

    // this.flights$.pipe(take(1)).subscribe((flights) => {
    //   const flight = flights[1];
    //   const oldDate = new Date(flight.date);
    //   const newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
    //   const newFlight: Flight = {
    //     ...flight,
    //     date: newDate.toISOString(),
    //     delayed: true,
    //   };
    //
    //   this.store.dispatch(updateFlight({ flight: newFlight }));
    // });
  }
}
