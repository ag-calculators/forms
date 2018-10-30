import { TestWindow } from '@stencil/core/testing';
import { StRadioButtonGroup } from './st-radio-button-group';

describe('st-radio-button-group', () => {
  it('should build', () => {
    expect(new StRadioButtonGroup()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStRadioButtonGroupElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StRadioButtonGroup],
        html: '<st-radio-button-group></st-radio-button-group>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
