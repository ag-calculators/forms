import { Component } from '@stencil/core';

@Component({
    tag: 'st-form-field-description',
    styleUrl: 'st-form-field-description.sass'
})
export class StFormFieldDescription {
    render() {
        return (
            <p class="st-ffd">
               <slot></slot>
            </p>
        );
    }
}
