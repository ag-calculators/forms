import { TestWindow } from '@stencil/core/testing';
import { StNumberPicker } from './st-number-picker';

describe('st-number-picker', () => {
  it('should build', () => {
    expect(new StNumberPicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStNumberPickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StNumberPicker],
        html: '<st-number-picker></st-number-picker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
