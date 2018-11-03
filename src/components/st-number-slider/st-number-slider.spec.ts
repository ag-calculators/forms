import { TestWindow } from '@stencil/core/testing';
import { StNumberSlider } from './st-number-slider';

describe('st-number-slider', () => {
  it('should build', () => {
    expect(new StNumberSlider()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStNumberSliderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StNumberSlider],
        html: '<st-number-slider></st-number-slider>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
