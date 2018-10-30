import { TestWindow } from '@stencil/core/testing';
import { StFormFieldLabel } from './st-form-field-label';

describe('st-form-field-label', () => {
  it('should build', () => {
    expect(new StFormFieldLabel()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormFieldLabelElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormFieldLabel],
        html: '<st-form-field-label></st-form-field-label>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
