import { Component } from '@stencil/core';


@Component({
    tag: 'st-form-actions'
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
