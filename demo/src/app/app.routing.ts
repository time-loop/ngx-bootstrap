import { LandingComponent } from './common/landing/landing.component';
import { DocumentationComponent } from './common/documentation/documentation.component';

export const routes = [
  {
    path: '',
    data: ['Landing page'],
    component: LandingComponent
  },
  {
    path: 'documentation',
    data: ['Documentation'],
    component: DocumentationComponent
  },
  {
    path: 'accordion',
    data: ['Accordion'],
    // component: AccordionSectionComponent
    loadChildren:
      () => import('./components/+accordion/demo-accordion.module').then(m => m.DemoAccordionModule)
  },
  {
    path: 'alerts',
    data: ['Alerts'],
    // component: AlertsSectionComponent,
    loadChildren: () => import('./components/+alerts/demo-alert.module').then(m => m.DemoAlertsModule)
  },
  {
    path: 'buttons',
    data: ['Buttons'],
    // component: ButtonsSectionComponent
    loadChildren: () => import('./components/+buttons/demo-buttons.module').then(m => m.DemoButtonsModule)
  },
  {
    path: 'carousel',
    data: ['Carousel'],
    // component: CarouselSectionComponent
    loadChildren:
      () => import('./components/+carousel/demo-carousel.module').then(m => m.DemoCarouselModule)
  },
  {
    path: 'collapse',
    data: ['Collapse'],
    // component: CollapseSectionComponent
    loadChildren:
      () => import('./components/+collapse/demo-collapse.module').then(m => m.DemoCollapseModule)
  },
  {
    path: 'datepicker',
    data: ['Datepicker'],
    // component: DatepickerSectionComponent
    loadChildren:
      () => import('./components/+datepicker/demo-datepicker.module').then(m => m.DemoDatepickerModule)
  },
  {
    path: 'dropdowns',
    data: ['Dropdowns'],
    // component: DropdownSectionComponent
    loadChildren:
      () => import('./components/+dropdown/demo-dropdown.module').then(m => m.DemoDropdownModule)
  },

  {
    path: 'modals',
    data: ['Modals'],
    // component: ModalSectionComponent
    loadChildren: () => import('./components/+modal/demo-modal.module').then(m => m.DemoModalModule)
  },
  {
    path: 'pagination',
    data: ['Pagination'],
    // component: PaginationSectionComponent
    loadChildren:
      () => import('./components/+pagination/demo-pagination.module').then(m => m.DemoPaginationModule)
  },
  {
    path: 'popover',
    data: ['Popover'],
    // component: PopoverSectionComponent
    loadChildren: () => import('./components/+popover/demo-popover.module').then(m => m.DemoPopoverModule)
  },
  {
    path: 'progressbar',
    data: ['Progressbar'],
    // component: ProgressbarSectionComponent
    loadChildren:
      () => import('./components/+progressbar/demo-progressbar.module').then(m => m.DemoProgressbarModule)
  },
  {
    path: 'rating',
    data: ['Rating'],
    // component: RatingSectionComponent,
    loadChildren: () => import('./components/+rating/demo-rating.module').then(m => m.DemoRatingModule)
  },
  {
    path: 'sortable',
    data: ['Sortable'],
    // component: SortableSectionComponent,
    loadChildren:
      () => import('./components/+sortable/demo-sortable.module').then(m => m.DemoSortableModule)
  },
  {
    path: 'tabs',
    data: ['Tabs'],
    // component: TabsSectionComponent
    loadChildren: () => import('./components/+tabs/demo-tabs.module').then(m => m.DemoTabsModule)
  },
  {
    path: 'timepicker',
    data: ['Timepicker'],
    // component: TimepickerSectionComponent
    loadChildren:
      () => import('./components/+timepicker/demo-timepicker.module').then(m => m.DemoTimepickerModule)
  },
  {
    path: 'tooltip',
    data: ['Tooltip'],
    // component: TooltipSectionComponent
    loadChildren: () => import('./components/+tooltip/demo-tooltip.module').then(m => m.DemoTooltipModule)
  },
  {
    path: 'typeahead',
    data: ['Typeahead'],
    // component: TypeaheadSectionComponent
    loadChildren:
      () => import('./components/+typeahead/demo-typeahead.module').then(m => m.DemoTypeaheadModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
