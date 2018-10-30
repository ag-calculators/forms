import { TestWindow } from '@stencil/core/testing';
import { StFormPage } from './st-form-page';

describe('st-form-page', () => {
  it('should build', () => {
    expect(new StFormPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormPage],
        html: '<st-form-page></st-form-page>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
