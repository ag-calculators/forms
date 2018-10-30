import { TestWindow } from '@stencil/core/testing';
import { StFormOptionsRow } from './st-form-options-row';

describe('st-form-options-row', () => {
  it('should build', () => {
    expect(new StFormOptionsRow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormOptionsRowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormOptionsRow],
        html: '<st-form-options-row></st-form-options-row>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
