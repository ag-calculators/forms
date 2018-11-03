import { TestWindow } from '@stencil/core/testing';
import { StDatePickerField } from './st-date-picker-field';

describe('st-date-picker-field', () => {
  it('should build', () => {
    expect(new StDatePickerField()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStDatePickerFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StDatePickerField],
        html: '<st-date-picker-field></st-date-picker-field>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
