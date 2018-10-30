import { TestWindow } from '@stencil/core/testing';
import { StForm } from './st-form';

describe('st-form', () => {
  it('should build', () => {
    expect(new StForm()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StForm],
        html: '<st-form></st-form>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
