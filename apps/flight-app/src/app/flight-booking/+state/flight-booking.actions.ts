import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const loadFlights = createAction(
  '[FlightBooking] LoadFlights',
  props<{ from: string; to: string; urgent?: boolean }>()
);

export const loadFlightsError = createAction(
  '[FlightBooking] LoadFlightsError'
);

export const flightsLoaded = createAction(
  '[FlightBooking] FlightsLoaded',
  props<{ flights: Flight[] }>()
);

export const updateFlight = createAction(
  '[FlightBooking] UpdateFlight',
  props<{ flight: Flight }>()
);

export const delayFirstFlight = createAction(
  '[FlightBooking] DelayFirstFlight'
);
