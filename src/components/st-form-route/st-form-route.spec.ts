import { TestWindow } from '@stencil/core/testing';
import { StFormRoute } from './st-form-route';

describe('st-form-route', () => {
  it('should build', () => {
    expect(new StFormRoute()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormRouteElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormRoute],
        html: '<st-form-route></st-form-route>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
