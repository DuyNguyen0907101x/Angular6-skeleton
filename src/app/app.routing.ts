import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ExampleComponent } from './example/example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'components',
    component: ExampleComponent
  },
  {
    path: 'student-management',
    loadChildren: './student-management/student-management.module#StudentManagementModule'
  },
  {
    path: 'another',
    loadChildren: './another/another.module#AnotherModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
