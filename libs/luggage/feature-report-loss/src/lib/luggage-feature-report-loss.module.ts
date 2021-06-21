import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ReportLossComponent,
  },
];

@NgModule({
  imports: [CommonModule, LuggageDomainModule, RouterModule.forChild(ROUTES)],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent],
})
export class LuggageFeatureReportLossModule {}
