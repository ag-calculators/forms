import { TestWindow } from '@stencil/core/testing';
import { StEditableContent } from './st-editable-content';

describe('st-editable-content', () => {
  it('should build', () => {
    expect(new StEditableContent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStEditableContentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StEditableContent],
        html: '<st-editable-content></st-editable-content>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
