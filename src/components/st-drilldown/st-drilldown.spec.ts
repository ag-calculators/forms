import { TestWindow } from '@stencil/core/testing';
import { StDrilldown } from './st-drilldown';

describe('st-drilldown', () => {
  it('should build', () => {
    expect(new StDrilldown()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStDrilldownElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StDrilldown],
        html: '<st-drilldown></st-drilldown>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
