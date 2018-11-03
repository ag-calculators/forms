import { Component, Watch, Prop, State, Method } from '@stencil/core';

@Component({
    tag: 'st-modal-dialog',
    styleUrl: 'st-modal-dialog.sass'
})
export class StModalDialog { 

    @Prop() isOpen: boolean
    @State() open: boolean

    @Method()
    show() {
        this.open = true;
        if (!window.document.body.classList.contains('st-modal-open')) {
            window.document.body.classList.add('st-modal-open');
        }
    }

    @Method()
    close() {
        this.open = false;
        if (window.document.body.classList.contains('st-modal-open')) {
            window.document.body.classList.remove('st-modal-open');
        }
    }

    @Watch('isOpen')
    handleIsOpen(newValue: boolean) {
        this.open = newValue;
    }

    render() {

        return (
            <div class={`st-modal-dialog${this.open ? ' st-open' : ''}`}>
                <div class="st-modal-dialog__header">
                    <slot name="header"></slot>
                </div>
                <div class="st-modal-dialog__content">
                    <slot></slot>
                </div>
                <div class="st-modal-dialog__footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        );
    }

    componentDidLoad() {
        this.open = this.isOpen;
    }
}
