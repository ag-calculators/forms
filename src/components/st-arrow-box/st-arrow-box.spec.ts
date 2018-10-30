import { TestWindow } from '@stencil/core/testing';
import { StArrowBox } from './st-arrow-box';

describe('st-arrow-box', () => {
  it('should build', () => {
    expect(new StArrowBox()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStArrowBoxElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StArrowBox],
        html: '<st-arrow-box></st-arrow-box>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
