import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Observable } from 'rxjs';

import { StudentService } from '../student.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  // student: Observable<Student>;
  student: Student;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService
      .getStudentById(id)
      .subscribe(student => this.student = student);
    // this.studentService.getStudentById(+this.route.snapshot.paramMap.get('id'))
    // .subscribe(student => console.log(student))
    // this.student = this.studentService.getStudentById(+this.route.snapshot.paramMap.get('id'));
  }

}
