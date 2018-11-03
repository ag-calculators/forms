import { TestWindow } from '@stencil/core/testing';
import { StFormPadding } from './st-form-padding';

describe('st-form-padding', () => {
  it('should build', () => {
    expect(new StFormPadding()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormPaddingElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormPadding],
        html: '<st-form-padding></st-form-padding>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
