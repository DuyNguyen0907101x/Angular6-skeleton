import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { StudentService } from '../student.service';
import { TextService } from '../../shared/text/text.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: Observable<Array<Student>>;
  text: Observable<string>;

  constructor(
    private studentService: StudentService,
    private textService: TextService
  ) { }

  ngOnInit() {
    this.studentList = this.studentService.getStudentList();

    // shared service usage example
    this.textService.getText().subscribe(text => console.log(text));
  }

}
