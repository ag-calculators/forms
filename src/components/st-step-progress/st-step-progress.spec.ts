import { TestWindow } from '@stencil/core/testing';
import { StStepProgress } from './st-step-progress';

describe('st-step-progress', () => {
  it('should build', () => {
    expect(new StStepProgress()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStStepProgressElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StStepProgress],
        html: '<st-step-progress></st-step-progress>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
