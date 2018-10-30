import { TestWindow } from '@stencil/core/testing';
import { StFormFieldHint } from './st-form-field-hint';

describe('st-form-field-hint', () => {
  it('should build', () => {
    expect(new StFormFieldHint()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormFieldHintElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormFieldHint],
        html: '<st-form-field-hint></st-form-field-hint>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
