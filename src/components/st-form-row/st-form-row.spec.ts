import { TestWindow } from '@stencil/core/testing';
import { StFormRow } from './st-form-row';

describe('st-form-row', () => {
  it('should build', () => {
    expect(new StFormRow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormRowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormRow],
        html: '<st-form-row></st-form-row>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
