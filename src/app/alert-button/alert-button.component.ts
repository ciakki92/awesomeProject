import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css'],
})
export class AlertButtonComponent implements OnInit {
  // content: Observable<any>;
  content = 'You have been warned';
  hideContent = true;
  severity = 423;

  constructor() {}
  // constructor(private msgServie: MessageService) {}

  ngOnInit(): void {
    // this.content = this.msgServie.getContent();
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }
}
