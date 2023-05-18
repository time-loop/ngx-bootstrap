import { Component, Host, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from '@time-loop/ngx-bootstrap/utils';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styles: [
    `
    :host {
      width: 100%;
      display: flex;
    }
  `
  ]
})
export class ProgressbarComponent {
  /** if `true` changing value of progress bar will be animated */
  @Input()
  set animate(value: boolean) {
    this._animate = value;
    this.bars.forEach((b: BarComponent) => {
      b.animate = value;
    });
  }
  /** If `true`, striped classes are applied */
  @Input()
  set striped(value: boolean) {
    this._striped = value;
    this.bars.forEach((b: BarComponent) => {
      b.striped = value;
    });
  }

  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() type: string;
  /** current value of progress bar. Could be a number or array of objects
   * like {"value":15,"type":"info","label":"15 %"}
   */
  @Input()
  /* tslint:disable-next-line:no-any */
  set value(value: number | any[]) {
    this.isStacked = Array.isArray(value);
    this._value = value;
  }
  isStacked = false;
  _striped: boolean;
  _animate: boolean;
  /* tslint:disable-next-line:no-any */
  _value: number | any[];
  get isBs3(): boolean {
    return isBs3();
  }

  /** maximum total value of progress element */
  @HostBinding('attr.max')
  @Input()
  get max(): number {
    return this._max;
  }

  set max(v: number) {
    this._max = v;
    this.bars.forEach((bar: BarComponent) => {
      bar.recalculatePercentage();
    });
  }

  @HostBinding('class.progress') addClass = true;

  /* tslint:disable-next-line:no-any */
  bars: BarComponent[] = [];

  protected _max = 100;

  constructor(config: ProgressbarConfig) {
    Object.assign(this, config);
  }
  addBar(bar: BarComponent): void {
    bar.animate = this._animate;
    bar.striped = this._striped;

    this.bars.push(bar);
  }

  removeBar(bar: BarComponent): void {
    this.bars.splice(this.bars.indexOf(bar), 1);
  }
}

// todo: number pipe
// todo: use query from progress?
@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  host: {
    role: 'progressbar',
    'aria-valuemin': '0',
    '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
    '[class.progress-bar-animated]': '!isBs3 && animate',
    '[class.progress-bar-striped]': 'striped',
    '[class.active]': 'isBs3 && animate',
    '[attr.aria-valuenow]': 'value',
    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
    '[attr.aria-valuemax]': 'max',
    '[style.height.%]': '"100"'
  }
})
export class BarComponent implements OnInit, OnDestroy {
  max: number;

  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() type: string;

  /** current value of progress bar */
  @Input()
  get value(): number {
    return this._value;
  }

  set value(v: number) {
    if (!v && v !== 0) {
      return;
    }
    this._value = v;
    this.recalculatePercentage();
  }

  @HostBinding('style.width.%')
  get setBarWidth() {
    this.recalculatePercentage();

    return this.percent;
  }

  get isBs3(): boolean {
    return isBs3();
  }

  striped: boolean;
  animate: boolean;
  percent = 0;
  progress: ProgressbarComponent;

  protected _value: number;

  constructor(@Host() progress: ProgressbarComponent) {
    this.progress = progress;
  }

  ngOnInit(): void {
    this.progress.addBar(this);
  }

  ngOnDestroy(): void {
    this.progress.removeBar(this);
  }

  recalculatePercentage(): void {
    this.percent = +(this.value / this.progress.max * 100).toFixed(2);

    const totalPercentage = this.progress.bars
      .reduce(function (total: number, bar: BarComponent): number {
        return total + bar.percent;
      }, 0);

    if (totalPercentage > 100) {
      this.percent -= totalPercentage - 100;
    }
  }
}
