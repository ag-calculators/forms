import { TestWindow } from '@stencil/core/testing';
import { StDatePicker } from './st-date-picker';

describe('st-date-picker', () => {
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
        html: '<st-date-picker></st-date-picker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
