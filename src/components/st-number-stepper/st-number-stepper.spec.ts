import { TestWindow } from '@stencil/core/testing';
import { StNumberStepper } from './st-number-stepper';

describe('st-number-stepper', () => {
  it('should build', () => {
    expect(new StNumberStepper()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStNumberStepperElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StNumberStepper],
        html: '<st-number-stepper></st-number-stepper>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
