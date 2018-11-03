import { TestWindow } from '@stencil/core/testing';
import { StDatePicker } from './st-month-picker';

describe('st-month-picker', () => {
  it('should build', () => {
    expect(new StDatePicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStDatePickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StDatePicker],
        html: '<st-month-picker></st-month-picker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
