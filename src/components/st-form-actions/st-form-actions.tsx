import { Component } from '@stencil/core';


@Component({
    tag: 'st-form-actions',
    styleUrl: 'st-form-actions.sass'
})  
export class StFormActions {

    render() {
        return (
            <div class="st-form-action-row">
                <slot></slot>
            </div>
        );
    }
}
