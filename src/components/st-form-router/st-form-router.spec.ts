import { TestWindow } from '@stencil/core/testing';
import { StFormRouter } from './st-form-router';

describe('st-form-router', () => {
  it('should build', () => {
    expect(new StFormRouter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormRouterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormRouter],
        html: '<st-form-router></st-form-router>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
