import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ProgressbarComponent, BarComponent } from './progressbar.component';
import { ProgressbarConfig } from './progressbar.config';

@NgModule({
  imports: [CommonModule],
  declarations: [BarComponent, ProgressbarComponent],
  exports: [BarComponent, ProgressbarComponent]
})
export class ProgressbarModule {
  static forRoot(): ModuleWithProviders<ProgressbarModule> {
    return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
  }
}
