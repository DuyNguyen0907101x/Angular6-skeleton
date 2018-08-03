import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { StudentService } from '../student.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList: Observable<Array<Student>>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentList = this.studentService.getStudentList();
  }

}
