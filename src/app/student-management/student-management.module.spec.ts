import { StudentManagementModule } from './student-management.module';

describe('StudentManagementModule', () => {
  let studentManagementModule: StudentManagementModule;

  beforeEach(() => {
    studentManagementModule = new StudentManagementModule();
  });

  it('should create an instance', () => {
    expect(studentManagementModule).toBeTruthy();
  });
});
