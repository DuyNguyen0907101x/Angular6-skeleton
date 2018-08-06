import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as moment from 'moment-timezone';
import * as _ from 'lodash';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  student = { name: 'John', age: 24 };

  ngOnInit() {
    // moment example
    moment.tz.setDefault('Asia/Ho_Chi_Minh')
    moment.locale('vi');

    console.log(moment('2018/04/12 04:12', 'YYYY/MM/DD hh:mm').format('LLLL'))

    // lodash example
    const clonedStudent = _.clone(this.student);
    clonedStudent.age = 28;
    console.log(this.student);
    console.log(clonedStudent);
    console.log(this.student == clonedStudent);
    console.log(this.student === clonedStudent);
  }

  ngAfterViewInit() {
    // jquery example, not recommended
    $(document).ready(() => console.log('Document ready'));
  }
}
