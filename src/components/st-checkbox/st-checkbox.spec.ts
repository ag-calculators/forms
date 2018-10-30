import { TestWindow } from '@stencil/core/testing';
import { StCheckbox } from './st-checkbox';

describe('st-checkbox', () => {
  it('should build', () => {
    expect(new StCheckbox()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStCheckboxElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StCheckbox],
        html: '<st-checkbox></st-checkbox>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
