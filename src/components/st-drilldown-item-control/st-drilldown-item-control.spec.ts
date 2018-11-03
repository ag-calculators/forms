import { TestWindow } from '@stencil/core/testing';
import { StDrilldownItemControl } from './st-drilldown-item-control';

describe('st-drilldown-item-control', () => {
  it('should build', () => {
    expect(new StDrilldownItemControl()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStDrilldownItemControlElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StDrilldownItemControl],
        html: '<st-drilldown-item-control></st-drilldown-item-control>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
