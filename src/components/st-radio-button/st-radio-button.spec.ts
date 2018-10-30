import { TestWindow } from '@stencil/core/testing';
import { StRadioButton } from './st-radio-button';

describe('st-radio-button', () => {
  it('should build', () => {
    expect(new StRadioButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStRadioButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StRadioButton],
        html: '<st-radio-button></st-radio-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
