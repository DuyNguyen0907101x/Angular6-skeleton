import { AnotherModule } from './another.module';

describe('AnotherModule', () => {
  let anotherModule: AnotherModule;

  beforeEach(() => {
    anotherModule = new AnotherModule();
  });

  it('should create an instance', () => {
    expect(anotherModule).toBeTruthy();
  });
});
