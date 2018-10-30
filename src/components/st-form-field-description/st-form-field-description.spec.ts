import { TestWindow } from '@stencil/core/testing';
import { StFormFieldDescription } from './st-form-field-description';

describe('st-form-field-description', () => {
  it('should build', () => {
    expect(new StFormFieldDescription()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormFieldDescriptionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormFieldDescription],
        html: '<st-form-field-description></st-form-field-description>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
