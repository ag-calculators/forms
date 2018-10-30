import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-input-append',
    styleUrl: 'st-input-append.sass'
})
export class StInputAppend {
    @Prop() icon: string

    render() {
        return (
            <div class="st-input-append">
                <slot></slot>
                {this.icon && <span class="st-input-append-item">{this.icon}</span>}
            </div>
        );
    }
}
