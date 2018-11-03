import { TestWindow } from '@stencil/core/testing';
import { StGridSelect } from './st-grid-select';

describe('st-grid-select', () => {
  it('should build', () => {
    expect(new StGridSelect()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStGridSelectElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StGridSelect],
        html: '<st-grid-select></st-grid-select>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
