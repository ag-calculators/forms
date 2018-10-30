import { Component } from '@stencil/core';


@Component({
    tag: 'st-form-row'
})
export class StFormRow {
    render() {
        return (
            <div class="st-form-row">
                <slot></slot>
            </div>
        );
    }
}
