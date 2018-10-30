import { TestWindow } from '@stencil/core/testing';
import { StInputAppend } from './st-input-append';

describe('st-input-append', () => {
  it('should build', () => {
    expect(new StInputAppend()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStInputAppendElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StInputAppend],
        html: '<st-input-append></st-input-append>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
