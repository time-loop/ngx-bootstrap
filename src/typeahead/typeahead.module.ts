import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from '@time-loop/ngx-bootstrap/component-loader';
import { PositioningService } from '@time-loop/ngx-bootstrap/positioning';
import { TypeaheadConfig } from './typeahead.config';

@NgModule({
  imports: [CommonModule],
  declarations: [TypeaheadContainerComponent, TypeaheadDirective],
  exports: [TypeaheadContainerComponent, TypeaheadDirective],
  entryComponents: [TypeaheadContainerComponent]
})
export class TypeaheadModule {
  static forRoot(): ModuleWithProviders<TypeaheadModule> {
    return {
      ngModule: TypeaheadModule,
      providers: [ComponentLoaderFactory, PositioningService, TypeaheadConfig]
    };
  }
}
