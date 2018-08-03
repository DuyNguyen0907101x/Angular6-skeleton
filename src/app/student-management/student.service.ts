import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentList() {
    return this.http.get<Array<Student>>(`/assets/json/students.json`);
  }

  getStudentById(id: number) {
    return this.getStudentList()
      .pipe(
        map(studentList => {
          const filteredStudentList = studentList.filter(student => student.id === id);
          return filteredStudentList.length > 0
            ? filteredStudentList[0]
            : null;
        })
      );
  }
}
