import { CustomSalaryPipe } from './custom.pipe';

describe('CustomSalaryPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomSalaryPipe();
    expect(pipe).toBeTruthy();
  });
});
