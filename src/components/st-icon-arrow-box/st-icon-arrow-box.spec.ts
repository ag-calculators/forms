import { TestWindow } from '@stencil/core/testing';
import { StIconArrowBox } from './st-icon-arrow-box';

describe('st-icon-arrow-box', () => {
  it('should build', () => {
    expect(new StIconArrowBox()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStIconArrowBoxElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StIconArrowBox],
        html: '<st-icon-arrow-box></st-icon-arrow-box>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
