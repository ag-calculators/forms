import { TestWindow } from '@stencil/core/testing';
import { StFormPage_2 } from './st-form-page-2';

describe('st-form-page-2', () => {
  it('should build', () => {
    expect(new StFormPage_2()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormPage_2Element;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormPage_2],
        html: '<st-form-page-2></st-form-page-2>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
