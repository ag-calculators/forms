import { TestWindow } from '@stencil/core/testing';
import { StCheckboxField } from './st-checkbox-field';

describe('st-checkbox-field', () => {
  it('should build', () => {
    expect(new StCheckboxField()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStCheckboxFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StCheckboxField],
        html: '<st-checkbox-field></st-checkbox-field>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
