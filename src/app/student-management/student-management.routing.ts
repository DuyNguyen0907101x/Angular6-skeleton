import { Routes } from '@angular/router';

import { StudentManagementComponent } from './student-management.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

import { StudentManagementGuardService } from './student-management-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: StudentManagementComponent,
    canActivate: [StudentManagementGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'students'
      },
      {
        path: 'students',
        component: StudentListComponent
      },
      {
        path: 'students/:id',
        component: StudentDetailComponent
      }
    ]
  }
];
