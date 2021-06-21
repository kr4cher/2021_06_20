import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'check-in',
  },
  {
    path: 'check-in',
    loadChildren: () =>
      import('@flight-workspace/luggage/feature-checkin').then(
        (m) => m.LuggageFeatureCheckinModule
      ),
  },
  {
    path: 'report-loss',
    loadChildren: () =>
      import('@flight-workspace/luggage/feature-report-loss').then(
        (m) => m.LuggageFeatureReportLossModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
