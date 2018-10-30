import { TestWindow } from '@stencil/core/testing';
import { StRangeInput } from './st-range-input';

describe('st-range-input', () => {
  it('should build', () => {
    expect(new StRangeInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStRangeInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StRangeInput],
        html: '<st-range-input></st-range-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
