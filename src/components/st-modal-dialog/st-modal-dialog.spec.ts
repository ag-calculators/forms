import { TestWindow } from '@stencil/core/testing';
import { StModalDialog } from './st-modal-dialog';

describe('st-modal-dialog', () => {
  it('should build', () => {
    expect(new StModalDialog()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStModalDialogElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StModalDialog],
        html: '<st-modal-dialog></st-modal-dialog>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
