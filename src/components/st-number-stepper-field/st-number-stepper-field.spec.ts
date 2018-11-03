import { TestWindow } from '@stencil/core/testing';
import { StNumberStepperField } from './st-number-stepper-field';

describe('st-number-stepper-field', () => {
  it('should build', () => {
    expect(new StNumberStepperField()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStNumberStepperFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StNumberStepperField],
        html: '<st-number-stepper-field></st-number-stepper-field>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
