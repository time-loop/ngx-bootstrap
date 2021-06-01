(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1PmA":function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-success"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Dismissible popover"\n        triggers="focus">\n  Dismissible popover\n</button>\n\n'},"35Nh":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-delay',\n  templateUrl: './delay.html'\n})\nexport class DemoPopoverDelayComponent {}\n"},"4X3s":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoPopoverDismissComponent {}\n"},"4m7x":function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on top"\n        [adaptivePosition]="false"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on right"\n        [adaptivePosition]="false"\n        placement="right">\n  Popover on right\n</button>'},"6h8L":function(t,e,n){"use strict";n.r(e),e.default="import { PopoverModule } from 'ngx-bootstrap/popover';\n\n@NgModule({\n  imports: [PopoverModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},"7pRW":function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." containerClass="customClass">\n  Custom class demo\n</button>\n\n'},"7spY":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoPopoverBasicComponent {}\n"},C18Z:function(t,e,n){"use strict";n.r(e),e.default='<p>\n  <span popover="Hello there! I was triggered by changing isOpen property"\n        triggers=""  [isOpen]="isOpen">\n  This text has attached popover\n  </span>\n</p>\n<button type="button" class="btn btn-primary"\n        (click)="isOpen = !isOpen">\n  Toggle\n</button>\n'},C34l:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-context',\n  templateUrl: './popover-context.html'\n})\nexport class DemoPopoverContextComponent {\n  context = {\n    message: 'Hello there!'\n  };\n}\n"},"D4/O":function(t,e,n){"use strict";n.r(e),e.default='<ng-template #popTemplate>Just another: {{content}}</ng-template>\n<button type="button" class="btn btn-warning"\n        [popover]="popTemplate" popoverTitle="Template ref content inside">\n  TemplateRef binding\n</button>\n'},DOZk:function(t,e,n){"use strict";n.r(e),e.default='<p>\n  <span popover="Hello there! I was triggered manually"\n        triggers="" #pop="bs-popover">\n  This text has attached popover\n  </span>\n</p>\n\n<button type="button" class="btn btn-success" (click)="pop.show()">\n  Show\n</button>\n<button type="button" class="btn btn-warning" (click)="pop.hide()">\n  Hide\n</button>\n<button type="button" class="btn btn-info" (click)="pop.toggle()">\n  Toggle\n</button>\n'},EOo7:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-adaptive-position',\n  templateUrl: './adaptive-position.html'\n})\nexport class DemoPopoverAdaptivePositionComponent {}\n"},FcT9:function(t,e,n){"use strict";n.r(e),e.default='<div class="row">\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            popover="I will hide on blur"\n            triggers="mouseenter:mouseleave">\n      Hover over me!\n    </button>\n  </div>\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            popover="Double click one more time"\n            triggers="dblclick">\n      Double click me!\n    </button>\n  </div>\n  <div class="col-md-3">\n    <input type="text"\n           class="form-control"\n           placeholder="Show popover on input change"\n           popover="I will hide on blur"\n           triggers="keypress:focusout">\n  </div>\n</div>\n'},FsTv:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-outside-click',\n  templateUrl: './outside-click.html'\n})\nexport class DemoPopoverOutsideClickComponent {}\n"},GN1n:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-info"\n        [popover]="content" [popoverTitle]="title">\n  Simple binding\n</button>\n'},InHR:function(t,e,n){"use strict";n.r(e),n.d(e,"PopoverSectionComponent",function(){return I}),n.d(e,"DemoPopoverModule",function(){return L});var o=n("ofXK"),r=n("3Pt+"),s=n("tyNb"),c=n("EDFS"),p=n("ADEl"),i=n("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-adaptive-position"]],decls:4,vars:2,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on top","placement","top",1,"btn","btn-default","btn-secondary",3,"adaptivePosition"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on right","placement","right",1,"btn","btn-default","btn-secondary",3,"adaptivePosition"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Popover on top\n"),i.Rb(),i.Sb(2,"button",1),i.Cc(3," Popover on right\n"),i.Rb()),2&t&&(i.hc("adaptivePosition",!1),i.Ab(2),i.hc("adaptivePosition",!1))},directives:[c.b],encapsulation:2}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-basic"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Live demo\n"),i.Rb())},directives:[c.b],encapsulation:2}),t})(),u=(()=>{class t{constructor(){this.isOpen=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-trigger-by-isopen"]],decls:5,vars:1,consts:[["popover","Hello there! I was triggered by changing isOpen property","triggers","",3,"isOpen"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(i.Sb(0,"p"),i.Sb(1,"span",0),i.Cc(2," This text has attached popover "),i.Rb(),i.Rb(),i.Sb(3,"button",1),i.Zb("click",function(){return e.isOpen=!e.isOpen}),i.Cc(4," Toggle\n"),i.Rb()),2&t&&(i.Ab(1),i.hc("isOpen",e.isOpen))},directives:[c.b],encapsulation:2}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-class"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","containerClass","customClass",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Custom class demo\n"),i.Rb())},directives:[c.b],encapsulation:2}),t})();function b(){return Object.assign(new c.a,{placement:"right",container:"body",triggers:"focus",delay:500})}let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-config"]],features:[i.zb([{provide:c.a,useFactory:b}])],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Preconfigured popover\n"),i.Rb())},directives:[c.b],encapsulation:2}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-container"]],decls:6,vars:0,consts:[[1,"row","panel",2,"position","relative","overflow","hidden"],[1,"card-block","panel-body"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-danger"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","container","body",1,"btn","btn-success"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"button",2),i.Cc(3," Default popover "),i.Rb(),i.Sb(4,"button",3),i.Cc(5," Popover appended to body "),i.Rb(),i.Rb(),i.Rb())},directives:[c.b],encapsulation:2}),t})();function g(t,e){1&t&&i.Cc(0),2&t&&i.Dc(e.message)}let f=(()=>{class t{constructor(){this.context={message:"Hello there!"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-context"]],decls:4,vars:2,consts:[["popTemplate",""],["type","button",1,"btn","btn-primary",3,"popover","popoverContext"]],template:function(t,e){if(1&t&&(i.Ac(0,g,1,1,"ng-template",null,0,i.Bc),i.Sb(2,"button",1),i.Cc(3," Open popover with custom context\n"),i.Rb()),2&t){const t=i.rc(1);i.Ab(2),i.hc("popover",t)("popoverContext",e.context)}},directives:[c.b],encapsulation:2}),t})();function h(t,e){if(1&t&&i.Cc(0),2&t){const t=i.bc();i.Ec("Just another: ",t.content,"")}}let y=(()=>{class t{constructor(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-custom-content"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button","popoverTitle","Template ref content inside",1,"btn","btn-warning",3,"popover"]],template:function(t,e){if(1&t&&(i.Ac(0,h,1,1,"ng-template",null,0,i.Bc),i.Sb(2,"button",1),i.Cc(3," TemplateRef binding\n"),i.Rb()),2&t){const t=i.rc(1);i.Ab(2),i.hc("popover",t)}},directives:[c.b],encapsulation:2}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-delay"]],decls:2,vars:1,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"delay"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Popover with 0.5sec delay\n"),i.Rb()),2&t&&i.hc("delay",500)},directives:[c.b],encapsulation:2}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-dismiss"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Dismissible popover","triggers","focus",1,"btn","btn-success"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Dismissible popover\n"),i.Rb())},directives:[c.b],encapsulation:2}),t})(),P=(()=>{class t{constructor(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-dynamic"]],decls:2,vars:2,consts:[["type","button",1,"btn","btn-info",3,"popover","popoverTitle"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Simple binding\n"),i.Rb()),2&t&&i.hc("popover",e.content)("popoverTitle",e.title)},directives:[c.b],encapsulation:2}),t})();function x(t,e){if(1&t&&(i.Cc(0,"Here we go: "),i.Nb(1,"div",2)),2&t){const t=i.bc();i.Ab(1),i.hc("innerHtml",t.html,i.vc)}}let S=(()=>{class t{constructor(){this.html='<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>'}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-dynamic-html"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button","popoverTitle","Dynamic html inside",1,"btn","btn-success",3,"popover"],[3,"innerHtml"]],template:function(t,e){if(1&t&&(i.Ac(0,x,2,1,"ng-template",null,0,i.Bc),i.Sb(2,"button",1),i.Cc(3," Show me popover with html\n"),i.Rb()),2&t){const t=i.rc(1);i.Ab(2),i.hc("popover",t)}},directives:[c.b],encapsulation:2}),t})(),T=(()=>{class t{onShown(){this.message="shown"}onHidden(){this.message="hidden"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-events"]],decls:6,vars:1,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"onShown","onHidden"],[1,"card","card-block","card-header","mb-3"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Zb("onShown",function(){return e.onShown()})("onHidden",function(){return e.onHidden()}),i.Cc(1," Live demo\n"),i.Rb(),i.Nb(2,"br"),i.Nb(3,"br"),i.Sb(4,"pre",1),i.Cc(5),i.Rb()),2&t&&(i.Ab(5),i.Ec("Event: ",e.message,""))},directives:[c.b],encapsulation:2}),t})(),R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-outside-click"]],decls:2,vars:1,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"outsideClick"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Live demo\n"),i.Rb()),2&t&&i.hc("outsideClick",!0)},directives:[c.b],encapsulation:2}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-placement"]],decls:10,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on top","placement","top",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on right","placement","right",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover auto","placement","auto",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on left","placement","left",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on bottom","placement","bottom",1,"btn","btn-default","btn-secondary"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," Popover on top\n"),i.Rb(),i.Sb(2,"button",1),i.Cc(3," Popover on right\n"),i.Rb(),i.Sb(4,"button",2),i.Cc(5," Popover auto\n"),i.Rb(),i.Sb(6,"button",3),i.Cc(7," Popover on left\n"),i.Rb(),i.Sb(8,"button",4),i.Cc(9," Popover on bottom\n"),i.Rb())},directives:[c.b],encapsulation:2}),t})(),D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-styling-local"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-info"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Cc(1," I have component level styling\n"),i.Rb())},directives:[c.b],styles:["[_nghost-%COMP%]     .popover {\n  background-color: #009688;\n  color: #fff;\n}\n[_nghost-%COMP%]     .popover>.arrow:after {\n  border-top-color: #009688;\n}"]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-triggers-custom"]],decls:9,vars:0,consts:[[1,"row"],[1,"col-md-2"],["type","button","popover","I will hide on blur","triggers","mouseenter:mouseleave",1,"btn","btn-info"],["type","button","popover","Double click one more time","triggers","dblclick",1,"btn","btn-info"],[1,"col-md-3"],["type","text","placeholder","Show popover on input change","popover","I will hide on blur","triggers","keypress:focusout",1,"form-control"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"button",2),i.Cc(3," Hover over me! "),i.Rb(),i.Rb(),i.Sb(4,"div",1),i.Sb(5,"button",3),i.Cc(6," Double click me! "),i.Rb(),i.Rb(),i.Sb(7,"div",4),i.Nb(8,"input",5),i.Rb(),i.Rb())},directives:[c.b],encapsulation:2}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-triggers-manual"]],decls:10,vars:0,consts:[["popover","Hello there! I was triggered manually","triggers",""],["pop","bs-popover"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,e){if(1&t){const t=i.Tb();i.Sb(0,"p"),i.Sb(1,"span",0,1),i.Cc(3," This text has attached popover "),i.Rb(),i.Rb(),i.Sb(4,"button",2),i.Zb("click",function(){return i.uc(t),i.rc(2).show()}),i.Cc(5," Show\n"),i.Rb(),i.Sb(6,"button",3),i.Zb("click",function(){return i.uc(t),i.rc(2).hide()}),i.Cc(7," Hide\n"),i.Rb(),i.Sb(8,"button",4),i.Zb("click",function(){return i.uc(t),i.rc(2).toggle()}),i.Cc(9," Toggle\n"),i.Rb()}},directives:[c.b],encapsulation:2}),t})();function H(t,e){if(1&t&&(i.Sb(0,"option",3),i.Cc(1),i.Rb()),2&t){const t=e.$implicit;i.hc("value",t),i.Ab(1),i.Ec(" ",t," ")}}let A=(()=>{class t{constructor(){this.placements=["top left","top right","right top","right bottom","bottom right","bottom left","left bottom","left top"],this.placement="top left"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-popover-corner-placement"]],decls:5,vars:5,consts:[[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-default","btn-secondary",3,"popoverTitle","placement"],[3,"value"]],template:function(t,e){1&t&&(i.Sb(0,"p"),i.Sb(1,"select",0),i.Zb("ngModelChange",function(t){return e.placement=t}),i.Ac(2,H,2,2,"option",1),i.Rb(),i.Rb(),i.Sb(3,"button",2),i.Cc(4),i.Rb()),2&t&&(i.Ab(1),i.hc("ngModel",e.placement),i.Ab(1),i.hc("ngForOf",e.placements),i.Ab(1),i.hc("popoverTitle","Popover on "+e.placement)("placement",e.placement),i.Ab(1),i.Ec(" ","Popover on "+e.placement," "))},directives:[r.u,r.m,r.p,o.m,c.b,r.q,r.v],encapsulation:2}),t})();const G=[{name:"Usage",anchor:"usage",outlet:p.e,content:{doc:n("6h8L")}},{name:"Examples",anchor:"examples",outlet:p.i,content:[{title:"Basic",anchor:"basic",component:n("7spY"),html:n("sNsU"),outlet:l},{title:"Placement",anchor:"placement",component:n("SWC4"),html:n("aj/k"),description:"<p>Four base positioning options are available: <code>top</code>, <code>right</code>,\n        <code>bottom</code>, and <code>left</code>.\n        Besides that, <code>auto</code> option may be used to detect a position that fits the component on screen.</p>",outlet:k},{title:"Corner placement",anchor:"corner-placement",description:'\n          <p>Placement property of a popover can contain "corner placement" specifier following the base positioning.\n          Thus, in addition to the four base positioning options, namely <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>, eight more positioning options are available: <code>top left</code>, <code>top right</code>,\n          <code>right top</code>, <code>right bottom</code>, <code>bottom right</code>, <code>bottom left</code>, <code>left bottom</code>, and <code>left top</code>.',component:n("Jbed"),html:n("aHTT"),outlet:A},{title:"Disable adaptive position",anchor:"adaptive-position",description:"\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",component:n("EOo7"),html:n("4m7x"),outlet:a},{title:"Dismiss on next click",anchor:"popover-dismiss",component:n("4X3s"),html:n("1PmA"),description:"<p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the\n      user makes.</p>",outlet:w},{title:"Dynamic content",anchor:"dynamic-content",component:n("Q92z"),html:n("GN1n"),description:"<p>Pass a string as popover content.</p>",outlet:P},{title:"Custom content template",anchor:"custom-content-template",component:n("TCpw"),html:n("D4/O"),description:'<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[popover]="myId"</code> as popover content.</p>',outlet:y},{title:"Dynamic Html",anchor:"dynamic-html",component:n("dR4K"),html:n("gzjA"),description:"<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you can display any dynamic html</p>",outlet:S},{title:"Append to body",anchor:"container-body",component:n("YOkx"),html:n("kmGB"),description:'<p>When you have any styles on a parent element that interfere with a popover,\n        you\u2019ll want to specify a <code>container="body"</code> so that the popover\u2019s HTML will be\n        appended to body. This will help to avoid rendering problems in more complex components\n        (like input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>',outlet:v},{title:"Visibility events",anchor:"events",component:n("og5h"),html:n("dhNY"),outlet:T},{title:"Configuring defaults",anchor:"config-defaults",component:n("rwBI"),html:n("i3KQ"),outlet:d},{title:"Outside click",anchor:"outside-click",component:n("FsTv"),html:n("Skir"),outlet:R},{title:"Custom triggers",anchor:"triggers-custom",component:n("NnEB"),html:n("FcT9"),outlet:V},{title:"Manual triggering",anchor:"triggers-manual",component:n("ecG7"),html:n("DOZk"),description:"<p>This demo shows manipulating popover by <code>show</code>,\n        <code>hide</code> and <code>toggle</code> methods</p>",outlet:O},{title:"Trigger by isOpen property",anchor:"trigger-by-isopen-property",component:n("umLW"),html:n("C18Z"),description:"<p>You can show/hide popover by switching <code>isOpen</code> property</p>",outlet:u},{title:"Component level styling",anchor:"styling-local",component:n("gU8r"),html:n("m4xG"),outlet:D},{title:"Custom class",anchor:"popover-custom-class",component:n("vQpx"),html:n("7pRW"),outlet:m},{title:"Popover context",anchor:"popover-context",component:n("C34l"),html:n("ZrFh"),outlet:f},{title:"Popover with delay",anchor:"popover-delay",component:n("35Nh"),html:n("bm71"),description:"<p>Click on the button to see popover delayed for 0,5 second </p>",outlet:C}]},{name:"API Reference",anchor:"api-reference",outlet:p.b,content:[{title:"PopoverDirective",anchor:"popover-directive",outlet:p.m},{title:"PopoverConfig",anchor:"popover-config",outlet:p.n}]}];var U=n("l/mK"),N=n("jiTH");let I=(()=>{class t{constructor(){this.name="Popover",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/popover",this.componentContent=G}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["tooltip-section"]],decls:16,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(t,e){1&t&&(i.Sb(0,"demo-section",0),i.Sb(1,"p"),i.Cc(2,"Add small overlay content, like those found in iOS, to any element for housing secondary information."),i.Rb(),i.Sb(3,"p"),i.Cc(4,"The easiest way to add the popover component to your app (will be added to the root module)"),i.Rb(),i.Sb(5,"pre",1),i.Sb(6,"span",2),i.Cc(7,"ng add ngx"),i.Rb(),i.Sb(8,"span",3),i.Cc(9,"-"),i.Rb(),i.Sb(10,"span",2),i.Cc(11,"bootstrap "),i.Rb(),i.Cc(12," --component "),i.Sb(13,"span",2),i.Cc(14,"popover"),i.Rb(),i.Rb(),i.Nb(15,"docs-section",4),i.Rb()),2&t&&(i.hc("name",e.name)("src",e.src)("componentContent",e.componentContent),i.Ab(15),i.hc("content",e.componentContent))},directives:[U.a,N.a],encapsulation:2,changeDetection:0}),t})();const M=[{path:"",component:I}];let L=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[o.c,r.i,p.g,c.c.forRoot(),s.i.forChild(M)]]}),t})()},Jbed:function(t,e,n){"use strict";n.r(e),e.default='import { Component } from \'@angular/core\';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: \'demo-popover-corner-placement\',\n  templateUrl: \'./corner-placement.html\'\n})\nexport class DemoPopoverCornerPlacementComponent {\n  placements = [\n    \'top left\',\n    \'top right\',\n    \'right top\',\n    \'right bottom\',\n    \'bottom right\',\n    \'bottom left\',\n    \'left bottom\',\n    \'left top\'\n  ]\n  placement: "top" | "bottom" | "left" | "right" | "auto" | "top left" | "top right" | "right top" | "right bottom" | "bottom right" | "bottom left" | "left bottom" | "left top" = \'top left\';\n}\n'},NnEB:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-triggers-custom',\n  templateUrl: './triggers-custom.html'\n})\nexport class DemoPopoverTriggersCustomComponent {}\n"},Q92z:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoPopoverDynamicComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},SWC4:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-placement',\n  templateUrl: './placement.html'\n})\nexport class DemoPopoverPlacementComponent {}\n"},Skir:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [outsideClick]="true">\n  Live demo\n</button>\n\n'},TCpw:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-custom-content',\n  templateUrl: './custom-content.html'\n})\nexport class DemoPopoverCustomContentComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},YOkx:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-container',\n  templateUrl: './container.html'\n})\nexport class DemoPopoverContainerComponent {}\n"},ZrFh:function(t,e,n){"use strict";n.r(e),e.default='<ng-template #popTemplate let-message="message">{{ message }}</ng-template>\n<button type="button" class="btn btn-primary"\n        [popover]="popTemplate" [popoverContext]="context">\n  Open popover with custom context\n</button>\n'},aHTT:function(t,e,n){"use strict";n.r(e),e.default='<p>\n  <select [(ngModel)]="placement" class="form-control">\n    <option *ngFor="let placement of placements"\n      [value]="placement">\n      {{ placement }}\n    </option>\n  </select>\n</p>\n<button type="button" class="btn btn-default btn-secondary"\n  popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n  [popoverTitle]="\'Popover on \' + placement"\n  [placement]="placement">\n  {{ \'Popover on \' + placement }} \n</button>\n'},"aj/k":function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on top"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on right"\n        placement="right">\n  Popover on right\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover auto"\n        placement="auto">\n  Popover auto\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on left"\n        placement="left">\n  Popover on left\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on bottom"\n        placement="bottom">\n  Popover on bottom\n</button>\n'},bm71:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." [delay]="500">\n  Popover with 0.5sec delay\n</button>\n\n'},dR4K:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoPopoverDynamicHtmlComponent {\n  html = `<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>`;\n}\n"},dhNY:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary"\n        (onShown)="onShown()" (onHidden)="onHidden()"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Live demo\n</button>\n<br>\n<br>\n<pre class="card card-block card-header mb-3">Event: {{message}}</pre>\n'},ecG7:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-triggers-manual',\n  templateUrl: './triggers-manual.html'\n})\nexport class DemoPopoverTriggersManualComponent {}\n"},gU8r:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-styling-local',\n  templateUrl: './styling-local.html',\n  styles: [\n    `\n:host >>> .popover {\n  background-color: #009688;\n  color: #fff;\n}\n:host >>> .popover>.arrow:after {\n  border-top-color: #009688;\n}\n  `\n  ]\n})\nexport class DemoPopoverStylingLocalComponent {}\n"},gzjA:function(t,e,n){"use strict";n.r(e),e.default='<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>\n<button type="button" class="btn btn-success"\n        [popover]="popTemplate" popoverTitle="Dynamic html inside">\n  Show me popover with html\n</button>\n'},i3KQ:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Preconfigured popover\n</button>\n'},kmGB:function(t,e,n){"use strict";n.r(e),e.default='<div class="row panel" style="position: relative; overflow: hidden;">\n  <div class="card-block panel-body">\n    <button type="button" class="btn btn-danger"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n      Default popover\n    </button>\n    <button type="button" class="btn btn-success"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n            container="body">\n      Popover appended to body\n    </button>\n  </div>\n</div>\n'},m4xG:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-info"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  I have component level styling\n</button>\n'},og5h:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-events',\n  templateUrl: './events.html'\n})\nexport class DemoPopoverEventsComponent {\n  message: string;\n\n  onShown(): void {\n    this.message = 'shown';\n  }\n\n  onHidden(): void {\n    this.message = 'hidden';\n  }\n}\n"},rwBI:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { PopoverConfig } from 'ngx-bootstrap/popover';\n\n// such override allows to keep some initial values\n\nexport function getPopoverConfig(): PopoverConfig {\n  return Object.assign(new PopoverConfig(), {\n    placement: 'right',\n    container: 'body',\n    triggers: 'focus',\n    delay: 500\n  });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-config',\n  templateUrl: './config.html',\n  providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]\n})\nexport class DemoPopoverConfigComponent {}\n"},sNsU:function(t,e,n){"use strict";n.r(e),e.default='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Live demo\n</button>\n\n'},umLW:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-trigger-by-isopen',\n  templateUrl: './trigger-by-isopen-property.html'\n})\nexport class DemoPopoverByIsOpenPropComponent {\n  isOpen = false;\n}\n"},vQpx:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-class',\n  templateUrl: './class.html'\n})\nexport class DemoPopoverClassComponent {}\n"}}]);