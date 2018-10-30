import { TestWindow } from '@stencil/core/testing';
import { StFormAction } from './st-form-action';

describe('st-form-action', () => {
  it('should build', () => {
    expect(new StFormAction()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormActionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormAction],
        html: '<st-form-action></st-form-action>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
