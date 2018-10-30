import { Component } from '@stencil/core';

@Component({
    tag: 'st-form-field-hint',
    styleUrl: 'st-form-field-hint.sass'
})
export class StFormFieldHint {

    render() {
        return (
            <p class="st-ffh">
                <slot></slot>
            </p>
        );
    }
}
