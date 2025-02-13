import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

xdescribe('App: Ng2Bootstrap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  it(
    'should create the app',
    waitForAsync(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should have as title 'app works!'`,
    waitForAsync(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app works!');
    })
  );

  it(
    'should render title in a h1 tag',
    waitForAsync(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('app works!');
    })
  );
});
