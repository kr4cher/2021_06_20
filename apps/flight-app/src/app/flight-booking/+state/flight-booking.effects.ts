import { Injectable } from '@angular/core';
import { FlightService } from '@flight-workspace/flight-lib';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  flightsLoaded,
  loadFlights,
  loadFlightsError,
} from './flight-booking.actions';

@Injectable()
export class FlightBookingEffects {
  constructor(
    private actions$: Actions,
    private flightService: FlightService
  ) {}

  loadFlights = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFlights),
      switchMap((action) =>
        this.flightService.find(action.from, action.to, action.urgent).pipe(
          map((flights) => flightsLoaded({ flights })),
          catchError((err) => of(loadFlightsError()))
        )
      )
    )
  );
}
