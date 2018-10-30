import { TestWindow } from '@stencil/core/testing';
import { StRadioGroup } from './st-radio-group';

describe('st-radio-group', () => {
  it('should build', () => {
    expect(new StRadioGroup()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStRadioGroupElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StRadioGroup],
        html: '<st-radio-group></st-radio-group>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
