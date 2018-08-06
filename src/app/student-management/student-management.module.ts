import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { StudentManagementComponent } from './student-management.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';

import { StudentService } from './student.service';

import { routes } from './student-management.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    StudentManagementComponent,
    StudentDetailComponent,
    StudentListComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentManagementModule { }
