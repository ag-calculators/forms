import { TestWindow } from '@stencil/core/testing';
import { StFormHeader } from './st-form-header';

describe('st-form-header', () => {
  it('should build', () => {
    expect(new StFormHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormHeaderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormHeader],
        html: '<st-form-header></st-form-header>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
