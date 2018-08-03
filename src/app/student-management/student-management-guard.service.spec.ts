import { TestBed, inject } from '@angular/core/testing';

import { StudentManagementGuardService } from './student-management-guard.service';

describe('StudentManagementGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentManagementGuardService]
    });
  });

  it('should be created', inject([StudentManagementGuardService], (service: StudentManagementGuardService) => {
    expect(service).toBeTruthy();
  }));
});
