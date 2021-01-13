import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';

import { MessageService } from '../message.service';
import { of } from 'rxjs';

describe('AlertComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;
  let serviceStub: any;

  beforeEach(async(() => {
    serviceStub = {
      getContent: () => of('You have been warned'),
    };

    TestBed.configureTestingModule({
      declarations: [AlertButtonComponent],
      providers: [{ provide: MessageService, useValue: serviceStub }],
    }).compileComponents(); // Compile html and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // ToBeTruty -> Something == true in boolean context
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have a severity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have an H1 tag of `Alert Button', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean asynchronusly', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  // it('should have message content defined from an observable', () => {
  //   component.content.subscribe((content) => {
  //     expect(content).toBeDefined();
  //     expect(content).toBe('You have been warned');
  //   });
  // });
});
// describe('AlertButtonComponent', () => {
//   let component: AlertButtonComponent;
//   let fixture: ComponentFixture<AlertButtonComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AlertButtonComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AlertButtonComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
