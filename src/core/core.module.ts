import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { Utilities } from './utils/utilities';

export const OG_CORE_PROVIDERS = [
  ApiService,
  Utilities
];
@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
})
export class CoreModule {
  constructor() {
  }
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        ...OG_CORE_PROVIDERS
      ],
    };
  }

}
