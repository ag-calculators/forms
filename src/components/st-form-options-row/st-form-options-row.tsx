import { Component } from '@stencil/core';


@Component({
    tag: 'st-form-options-row'
})
export class StFormOptionsRow {
    render() {
        return (
            <div class="st-form-options-row">
                <slot></slot>
            </div>
        );
    }
}
