import { ApiService } from 'src/core/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/core';
import { DashboardComponent } from './../../../pages/dashboard/dashboard.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  exports: [],
  providers: [ApiService],
  declarations: [JobsComponent],
})
export class DashboardModule {
  constructor() { }
}
