import { TestWindow } from '@stencil/core/testing';
import { StDrilldownItem } from './st-drilldown-item';

describe('st-drilldown-item', () => {
  it('should build', () => {
    expect(new StDrilldownItem()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStDrilldownItemElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StDrilldownItem],
        html: '<st-drilldown-item></st-drilldown-item>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
