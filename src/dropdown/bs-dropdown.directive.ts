// tslint:disable:max-file-line-count
import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ComponentLoader, ComponentLoaderFactory, BsComponentRef } from '@time-loop/ngx-bootstrap/component-loader';

import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownMenuDirective } from './index';
import { isBs3 } from '@time-loop/ngx-bootstrap/utils';

@Directive({
  selector: '[bsDropdown],[dropdown]',
  exportAs: 'bs-dropdown',
  providers: [BsDropdownState],
  host: {
    '[class.dropup]': 'dropup',
    '[class.open]': 'isOpen',
    '[class.show]': 'isOpen && isBs4'
  }
})
export class BsDropdownDirective implements OnInit, OnDestroy {
  /**
   * Placement of a popover. Accepts: "top", "bottom", "left", "right"
   */
  @Input() placement: string;
  /**
   * Specifies events that should trigger. Supports a space separated list of
   * event names.
   */
  @Input() triggers: string;
  /**
   * A selector specifying the element the popover should be appended to.
   * Currently only supports "body".
   */
  @Input() container: string;

  /**
   * This attribute indicates that the dropdown should be opened upwards
   */
  @Input() dropup: boolean;

  /**
   * Indicates that dropdown will be closed on item or document click,
   * and after pressing ESC
   */
  @Input()
  set autoClose(value: boolean) {
    this._state.autoClose = value;
  }

  get autoClose(): boolean {
    return this._state.autoClose;
  }

  /**
   * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
   */
  @Input()
  set insideClick(value: boolean) {
    this._state.insideClick = value;
  }

  get insideClick(): boolean {
    return this._state.insideClick;
  }

  /**
   * Disables dropdown toggle and hides dropdown menu if opened
   */
  @Input()
  set isDisabled(value: boolean) {
    this._isDisabled = value;
    this._state.isDisabledChange.emit(value);
    if (value) {
      this.hide();
    }
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  /**
   * Returns whether or not the popover is currently being shown
   */
  @Input()
  get isOpen(): boolean {
    if (this._showInline) {
      return this._isInlineOpen;
    }

    return this._dropdown.isShown;
  }

  set isOpen(value: boolean) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  /**
   * Emits an event when isOpen change
   */
  @Output() isOpenChange: EventEmitter<boolean>;

  /**
   * Emits an event when the popover is shown
   */
  @Output() onShown: EventEmitter<boolean>;

  /**
   * Emits an event when the popover is hidden
   */
  @Output() onHidden: EventEmitter<boolean>;

  get isBs4(): boolean {
    return !isBs3();
  }

  private _dropdown: ComponentLoader<BsDropdownContainerComponent>;

  private get _showInline(): boolean {
    return !this.container;
  }

  // todo: move to component loader
  private _isInlineOpen = false;

  private _inlinedMenu: EmbeddedViewRef<BsDropdownMenuDirective>;
  private _isDisabled: boolean;
  private _subscriptions: Subscription[] = [];
  private _isInited = false;

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2,
              private _viewContainerRef: ViewContainerRef,
              private _cis: ComponentLoaderFactory,
              private _config: BsDropdownConfig,
              private _state: BsDropdownState) {
    // set initial dropdown state from config
    this._state.autoClose = this._config.autoClose;
    this._state.insideClick = this._config.insideClick;

    // create dropdown component loader
    this._dropdown = this._cis
      .createLoader<BsDropdownContainerComponent>(
        this._elementRef,
        this._viewContainerRef,
        this._renderer
      )
      .provide({provide: BsDropdownState, useValue: this._state});

    this.onShown = this._dropdown.onShown;
    this.onHidden = this._dropdown.onHidden;
    this.isOpenChange = this._state.isOpenChange;

  }

  ngOnInit(): void {
    // fix: seems there are an issue with `routerLinkActive`
    // which result in duplicated call ngOnInit without call to ngOnDestroy
    // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
    if (this._isInited) {
      return;
    }
    this._isInited = true;

    // attach DOM listeners
    this._dropdown.listen({
      // because of dropdown inline mode
      outsideClick: false,
      triggers: this.triggers,
      show: () => this.show()
    });

    // toggle visibility on toggle element click
    this._subscriptions.push(
      this._state.toggleClick.subscribe((value: boolean) => this.toggle(value))
    );

    // hide dropdown if set disabled while opened
    this._subscriptions.push(
      this._state.isDisabledChange
        .pipe(
          filter((value: boolean) => value)
        )
        .subscribe((value: boolean) => this.hide())
    );
  }

  /**
   * Opens an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  show(): void {
    if (this.isOpen || this.isDisabled) {
      return;
    }

    if (this._showInline) {
      if (!this._inlinedMenu) {
        this._state.dropdownMenu.then(
          (dropdownMenu: BsComponentRef<BsDropdownMenuDirective>) => {
            this._dropdown.attachInline(
              dropdownMenu.viewContainer,
              dropdownMenu.templateRef
            );
            this._inlinedMenu = this._dropdown._inlineViewRef;
            this.addBs4Polyfills();
          }
        )
        // swallow errors
          .catch();
      }
      this.addBs4Polyfills();
      this._isInlineOpen = true;
      this.onShown.emit(true);
      this._state.isOpenChange.emit(true);

      return;
    }
    this._state.dropdownMenu.then(dropdownMenu => {
      // check direction in which dropdown should be opened
      const _dropup =
        this.dropup ||
        (typeof this.dropup !== 'undefined' && this.dropup);
      this._state.direction = _dropup ? 'up' : 'down';
      const _placement =
        this.placement || (_dropup ? 'top left' : 'bottom left');

      // show dropdown
      this._dropdown
        .attach(BsDropdownContainerComponent)
        .to(this.container)
        .position({attachment: _placement})
        .show({
          content: dropdownMenu.templateRef,
          placement: _placement
        });

      this._state.isOpenChange.emit(true);
    })
    // swallow error
      .catch();
  }

  /**
   * Closes an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  hide(): void {
    if (!this.isOpen) {
      return;
    }

    if (this._showInline) {
      this.removeShowClass();
      this.removeDropupStyles();
      this._isInlineOpen = false;
      this.onHidden.emit(true);
    } else {
      this._dropdown.hide();
    }

    this._state.isOpenChange.emit(false);
  }

  /**
   * Toggles an element’s popover. This is considered a “manual” triggering of
   * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
   * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
   */
  toggle(value?: boolean): void {
    if (this.isOpen || !value) {
      return this.hide();
    }

    return this.show();
  }

  /** @internal */
  _contains(event: any): boolean {
    return this._elementRef.nativeElement.contains(event.target) ||
      (this._dropdown.instance && this._dropdown.instance._contains(event.target));
  }

  ngOnDestroy(): void {
    // clean up subscriptions and destroy dropdown
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
    this._dropdown.dispose();
  }

  private addBs4Polyfills(): void {
    if (!isBs3()) {
      this.addShowClass();
      this.checkRightAlignment();
      this.addDropupStyles();
    }
  }

  private addShowClass(): void {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
    }
  }

  private removeShowClass(): void {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
    }
  }

  private checkRightAlignment(): void {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      const isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains(
        'dropdown-menu-right'
      );
      this._renderer.setStyle(
        this._inlinedMenu.rootNodes[0],
        'left',
        isRightAligned ? 'auto' : '0'
      );
      this._renderer.setStyle(
        this._inlinedMenu.rootNodes[0],
        'right',
        isRightAligned ? '0' : 'auto'
      );
    }
  }

  private addDropupStyles(): void {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      // a little hack to not break support of bootstrap 4 beta
      this._renderer.setStyle(
        this._inlinedMenu.rootNodes[0],
        'top',
        this.dropup ? 'auto' : '100%'
      );
      this._renderer.setStyle(
        this._inlinedMenu.rootNodes[0],
        'transform',
        this.dropup ? 'translateY(-101%)' : 'translateY(0)'
      );
      this._renderer.setStyle(
        this._inlinedMenu.rootNodes[0],
        'bottom',
        'auto'
      );
    }
  }

  private removeDropupStyles(): void {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
    }
  }
}

@Component({
  selector: 'bs-dropdown-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display:block;position: absolute;'
  },
  template: `
    <div [class.dropup]="direction === 'up'"
         [class.dropdown]="direction === 'down'"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content></div>
  `
})
export class BsDropdownContainerComponent implements OnDestroy {
  isOpen = false;

  get direction(): 'down' | 'up' {
    return this._state.direction;
  }

// tslint:disable-next-line:no-any
  private _subscription: any;

  constructor(
    private _state: BsDropdownState,
    private cd: ChangeDetectorRef,
    private _renderer: Renderer2,
    private _element: ElementRef
  ) {
    this._subscription = _state.isOpenChange.subscribe((value: boolean) => {
      this.isOpen = value;
      const dropdown = this._element.nativeElement.querySelector('.dropdown-menu');
      if (dropdown && !isBs3()) {
        this._renderer.addClass(dropdown, 'show');
        if (dropdown.classList.contains('dropdown-menu-right')) {
          this._renderer.setStyle(dropdown, 'left', 'auto');
          this._renderer.setStyle(dropdown, 'right', '0');
        }
        if (this.direction === 'up') {
          this._renderer.setStyle(dropdown, 'top', 'auto');
          this._renderer.setStyle(
            dropdown,
            'transform',
            'translateY(-101%)'
          );
        }
      }
      this.cd.markForCheck();
      this.cd.detectChanges();
    });
  }

  /** @internal */
  _contains(el: Element): boolean {
    return this._element.nativeElement.contains(el);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
