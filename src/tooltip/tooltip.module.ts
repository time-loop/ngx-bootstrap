import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from '@time-loop/ngx-bootstrap/component-loader';
import { PositioningService } from '@time-loop/ngx-bootstrap/positioning';

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipDirective, TooltipContainerComponent],
  exports: [TooltipDirective],
  entryComponents: [TooltipContainerComponent]
})
export class TooltipModule {
  static forRoot(): ModuleWithProviders<TooltipModule> {
    return {
      ngModule: TooltipModule,
      providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
    };
  }
}
