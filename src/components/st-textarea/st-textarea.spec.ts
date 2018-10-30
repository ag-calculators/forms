import { TestWindow } from '@stencil/core/testing';
import { StTextarea } from './st-textarea';

describe('st-textarea', () => {
  it('should build', () => {
    expect(new StTextarea()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStTextareaElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StTextarea],
        html: '<st-textarea></st-textarea>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
