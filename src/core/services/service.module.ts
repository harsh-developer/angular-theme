import { ApiService } from 'src/core/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, CoreModule, HttpClientModule],
  exports: [],
  // declarations: [ApiService],
})
export class DashboardModule {
  constructor() { }
}
