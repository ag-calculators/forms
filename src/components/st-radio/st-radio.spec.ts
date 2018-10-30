import { TestWindow } from '@stencil/core/testing';
import { StRadio } from './st-radio';

describe('st-radio', () => {
  it('should build', () => {
    expect(new StRadio()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStRadioElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StRadio],
        html: '<st-radio></st-radio>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
