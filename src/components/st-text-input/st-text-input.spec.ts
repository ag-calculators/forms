import { TestWindow } from '@stencil/core/testing';
import { StTextInput } from './st-text-input';

describe('st-text-input', () => {
  it('should build', () => {
    expect(new StTextInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStTextInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StTextInput],
        html: '<st-text-input></st-text-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
