import { TestWindow } from '@stencil/core/testing';
import { StSelect } from './st-select';

describe('st-select', () => {
  it('should build', () => {
    expect(new StSelect()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStSelectElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StSelect],
        html: '<st-select></st-select>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
