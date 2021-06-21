import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CheckinComponent,
  },
];

@NgModule({
  imports: [CommonModule, LuggageDomainModule, RouterModule.forChild(ROUTES)],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}
