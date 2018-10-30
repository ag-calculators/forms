import { TestWindow } from '@stencil/core/testing';
import { StFormField } from './st-form-field';

describe('st-form-field', () => {
  it('should build', () => {
    expect(new StFormField()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormField],
        html: '<st-form-field></st-form-field>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
