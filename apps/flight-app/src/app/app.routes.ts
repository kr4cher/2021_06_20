import { loadRemoteModule } from '@angular-architects/module-federation';
import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { FlightLookaheadComponent } from './flight-lookahead/flight-lookahead.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux',
  },
  {
    path: 'mf-passenger',
    loadChildren: () =>
      loadRemoteModule({
        // remoteEntry: 'http://localhost:1234/remoteEntry.js',
        remoteName: 'passenger',
        exposedModule: './module',
      }).then((esm) => esm.PassengerModule),
  },
  {
    path: 'flight-lookahead',
    component: FlightLookaheadComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
