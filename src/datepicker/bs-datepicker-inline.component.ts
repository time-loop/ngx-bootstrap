import {
  ComponentRef, Directive, ElementRef, EventEmitter, Input, OnChanges,
  OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewContainerRef
} from '@angular/core';
import { ComponentLoader, ComponentLoaderFactory } from '@time-loop/ngx-bootstrap/component-loader';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import { Subscription } from 'rxjs';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsDatepickerConfig } from './bs-datepicker.config';

@Directive({
  selector: 'bs-datepicker-inline',
  exportAs: 'bsDatepickerInline'
})
export class BsDatepickerInlineDirective implements OnInit, OnDestroy, OnChanges {
  _bsValue: Date;
  /**
   * Initial value of datepicker
   */
  @Input()
  set bsValue(value: Date) {
    if (this._bsValue === value) {
      return;
    }
    this._bsValue = value;
    this.bsValueChange.emit(value);
  }

  /**
   * Config object for datepicker
   */
  @Input() bsConfig: Partial<BsDatepickerInlineConfig>;
  /**
   * Indicates whether datepicker is enabled or not
   */
  @Input() isDisabled: boolean;
  /**
   * Minimum date which is available for selection
   */
  @Input() minDate: Date;
  /**
   * Maximum date which is available for selection
   */
  @Input() maxDate: Date;
  /**
   * Emits when datepicker value has been changed
   */
  @Output() bsValueChange: EventEmitter<Date> = new EventEmitter();

  protected _subs: Subscription[] = [];

  private _datepicker: ComponentLoader<BsDatepickerInlineContainerComponent>;
  private _datepickerRef: ComponentRef<BsDatepickerInlineContainerComponent>;

  constructor(public _config: BsDatepickerInlineConfig,
              private _elementRef: ElementRef,
              _renderer: Renderer2,
              _viewContainerRef: ViewContainerRef,
              cis: ComponentLoaderFactory) {
    // todo: assign only subset of fields
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader<BsDatepickerInlineContainerComponent>(
      _elementRef,
      _viewContainerRef,
      _renderer
    );
  }

  ngOnInit(): void {
    this.setConfig();

    this._datepickerRef = this._datepicker
      .provide({provide: BsDatepickerConfig, useValue: this._config})
      .attach(BsDatepickerInlineContainerComponent)
      .to(this._elementRef)
      .show();

    // if date changes from external source (model -> view)
    this._subs.push(
      this.bsValueChange.subscribe((value: Date) => {
        this._datepickerRef.instance.value = value;
      })
    );

    // if date changes from picker (view -> model)
    this._subs.push(
      this._datepickerRef.instance.valueChange.subscribe((value: Date) => {
        this.bsValue = value;
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this._datepickerRef || !this._datepickerRef.instance) {
      return;
    }

    if (changes.minDate) {
      this._datepickerRef.instance.minDate = this.minDate;
    }

    if (changes.maxDate) {
      this._datepickerRef.instance.maxDate = this.maxDate;
    }

    if (changes.isDisabled) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
  }

  /**
   * Set config for datepicker
   */
  setConfig(): void {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this._bsValue,
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate
    });
  }

  ngOnDestroy(): any {
    this._datepicker.dispose();
  }
}
