import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-form-header',
    styleUrl: 'st-form-header.sass'
})
export class StFormHeader {
    @Prop() title: string
    

    render() {
        return (
            <header class="st-form-header">
                {this.title && <h1>{this.title}</h1>}
                <slot></slot>
            </header>
        );
    }
}
