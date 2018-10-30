import { TestWindow } from '@stencil/core/testing';
import { StNumberInput } from './st-number-input';

describe('st-number-input', () => {
  it('should build', () => {
    expect(new StNumberInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStNumberInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StNumberInput],
        html: '<st-number-input></st-number-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
