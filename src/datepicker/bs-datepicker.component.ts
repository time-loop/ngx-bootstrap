import {
  ComponentRef, Directive, ElementRef, EventEmitter, Input, OnChanges,
  OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewContainerRef
} from '@angular/core';
import { ComponentLoader, ComponentLoaderFactory } from '@time-loop/ngx-bootstrap/component-loader';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { Subscription } from 'rxjs';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDatepickerViewMode } from './models';

@Directive({
  selector: '[bsDatepicker]',
  exportAs: 'bsDatepicker'
})
export class BsDatepickerDirective implements OnInit, OnDestroy, OnChanges {
  /**
   * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
   */
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  /**
   * Specifies events that should trigger. Supports a space separated list of
   * event names.
   */
  @Input() triggers = 'click';
  /**
   * Close datepicker on outside click
   */
  @Input() outsideClick = true;
  /**
   * A selector specifying the element the datepicker should be appended to.
   * Currently only supports "body".
   */
  @Input() container = 'body';

  @Input() outsideEsc = true;

  /**
   * Returns whether or not the datepicker is currently being shown
   */
  @Input()
  get isOpen(): boolean {
    return this._datepicker.isShown;
  }

  set isOpen(value: boolean) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  /**
   * Emits an event when the datepicker is shown
   */
  /* tslint:disable-next-line: no-any*/
  @Output() onShown: EventEmitter<any>;
  /**
   * Emits an event when the datepicker is hidden
   */
  /* tslint:disable-next-line: no-any*/
  @Output() onHidden: EventEmitter<any>;

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
  @Input() bsConfig: Partial<BsDatepickerConfig>;
  /**
   * Indicates whether datepicker's content is enabled or not
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
   * Minimum view mode : day, month, or year
   */
  @Input() minMode: BsDatepickerViewMode;

  /**
   * Disable Certain days in the week
   */
  @Input() daysDisabled: number[];
  /**
   * Emits when datepicker value has been changed
   */
  @Output() bsValueChange: EventEmitter<Date> = new EventEmitter();

  protected _subs: Subscription[] = [];

  private _datepicker: ComponentLoader<BsDatepickerContainerComponent>;
  private _datepickerRef: ComponentRef<BsDatepickerContainerComponent>;

  constructor(public _config: BsDatepickerConfig,
              _elementRef: ElementRef,
              _renderer: Renderer2,
              _viewContainerRef: ViewContainerRef,
              cis: ComponentLoaderFactory) {
    // todo: assign only subset of fields
    Object.assign(this, this._config);
    this._datepicker = cis.createLoader<BsDatepickerContainerComponent>(
      _elementRef,
      _viewContainerRef,
      _renderer
    );
    this.onShown = this._datepicker.onShown;
    this.onHidden = this._datepicker.onHidden;
  }

  ngOnInit(): void {
    this._datepicker.listen({
      outsideClick: this.outsideClick,
      outsideEsc: this.outsideEsc,
      triggers: this.triggers,
      show: () => this.show()
    });
    this.setConfig();
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

    if (changes.daysDisabled) {
      this._datepickerRef.instance.daysDisabled = this.daysDisabled;
    }

    if (changes.isDisabled) {
      this._datepickerRef.instance.isDisabled = this.isDisabled;
    }
  }

  /**
   * Opens an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  show(): void {
    if (this._datepicker.isShown) {
      return;
    }

    this.setConfig();

    this._datepickerRef = this._datepicker
      .provide({provide: BsDatepickerConfig, useValue: this._config})
      .attach(BsDatepickerContainerComponent)
      .to(this.container)
      .position({attachment: this.placement})
      .show({placement: this.placement});

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
        this.hide();
      })
    );
  }

  /**
   * Closes an element’s datepicker. This is considered a “manual” triggering of
   * the datepicker.
   */
  hide(): void {
    if (this.isOpen) {
      this._datepicker.hide();
    }
    for (const sub of this._subs) {
      sub.unsubscribe();
    }
  }

  /**
   * Toggles an element’s datepicker. This is considered a “manual” triggering
   * of the datepicker.
   */
  toggle(): void {
    if (this.isOpen) {
      return this.hide();
    }

    this.show();
  }

  /**
   * Set config for datepicker
   */
  setConfig(): void {
    this._config = Object.assign({}, this._config, this.bsConfig, {
      value: this._bsValue,
      isDisabled: this.isDisabled,
      minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
      maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
      daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
      minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
    });
  }

  ngOnDestroy(): void {
    this._datepicker.dispose();
  }
}
