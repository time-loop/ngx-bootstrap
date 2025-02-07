import { ModuleWithProviders, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from '@time-loop/ngx-bootstrap/component-loader';

import { PositioningService } from '@time-loop/ngx-bootstrap/positioning';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownConfig } from './bs-dropdown.config';

import { BsDropdownContainerComponent, BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';

@NgModule({
  declarations: [
    BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownContainerComponent,
    BsDropdownDirective
  ],
  exports: [
    BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownDirective
  ],
  entryComponents: [BsDropdownContainerComponent]
})
export class BsDropdownModule {
  // tslint:disable-next-line:no-any
  static forRoot(config?: any): ModuleWithProviders<BsDropdownModule> {
    return {
      ngModule: BsDropdownModule,
      providers: [
        ComponentLoaderFactory,
        PositioningService,
        BsDropdownState,
        {
          provide: BsDropdownConfig,
          useValue: config ? config : { autoClose: true, insideClick: false }
        }
      ]
    };
  }
}
