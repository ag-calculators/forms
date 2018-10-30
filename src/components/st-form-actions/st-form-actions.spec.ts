import { TestWindow } from '@stencil/core/testing';
import { StFormActions } from './st-form-actions';

describe('st-form-actions', () => {
  it('should build', () => {
    expect(new StFormActions()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStFormActionsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StFormActions],
        html: '<st-form-actions></st-form-actions>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
