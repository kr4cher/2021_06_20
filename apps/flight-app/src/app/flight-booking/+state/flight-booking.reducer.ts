import { Flight } from '@flight-workspace/flight-lib';
import { createReducer, on } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  delayFirstFlight,
  flightsLoaded,
  updateFlight,
} from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Flight[];
  negativeList: number[];
}

export const initialState: State = {
  flights: [],
  negativeList: [3],
};

export const flightBookingReducer = createReducer<State>(
  initialState,

  mutableOn(flightsLoaded, (state: State, action) => {
    state.flights = action.flights;
  }),

  mutableOn(updateFlight, (state: State, { flight }) => {
    state.flights = state.flights.map((f) => (f.id === flight.id ? flight : f));
  }),

  mutableOn(delayFirstFlight, (state: State) => {
    if (state.flights.length === 0) return state;

    const firstFlight = state.flights[0];
    const oldDate = new Date(firstFlight.date);
    const newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
    firstFlight.date = newDate.toISOString();
    firstFlight.delayed = true;
  })
);

export interface FlightBookingAppState {
  flightBooking: State;
}
