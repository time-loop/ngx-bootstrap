import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '@time-loop/ngx-bootstrap/utils';

@Component({
  selector: 'popover-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line
  host: {
    '[class]':
      '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
    '[class.show]': '!isBs3',
    role: 'tooltip',
    style: 'display:block;'
  },
  styles: [
    `
    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {
      left: 50%;
      transform: translateX(-50%);
    }
    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {
      top: 50%;
      transform: translateY(-50%);
    }
  `
  ],
  templateUrl: './popover-container.component.html'
})
export class PopoverContainerComponent {
  @Input() placement: string;
  @Input() title: string;
  containerClass: string;

  get isBs3(): boolean {
    return isBs3();
  }

  constructor(config: PopoverConfig) {
    Object.assign(this, config);
  }
}
