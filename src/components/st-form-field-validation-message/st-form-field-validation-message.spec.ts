import { TestWindow } from '@stencil/core/testing';
import { StFormFieldValidationMessage } from './st-form-field-validation-message';

describe('st-form-field-validation-message', () => {
  it('should build', () => {
    expect(new StFormFieldValidationMessage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormFieldValidationMessageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormFieldValidationMessage],
        html: '<st-form-field-validation-message></st-form-field-validation-message>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
