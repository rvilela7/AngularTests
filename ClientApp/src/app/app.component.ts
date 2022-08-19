import { Component, HostListener, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

// import * as moment from 'moment';
import * as moment from 'moment-timezone';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'app';
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler($event): void {
      $event.preventDefault()
      $event.returnValue = false;

  }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'full');
    console.log(Intl.DateTimeFormat().resolvedOptions());
    console.log(moment().tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment.version);
    // console.log(moment.defaultFormatUtc)
    console.log(moment.tz.guess());
    // console.log(moment.tz.zonesForCountry('US'));
    // console.log(moment.tz.zonesForCountry('PT'));
    console.log(navigator.userAgent);
  }
}


