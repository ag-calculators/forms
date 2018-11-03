import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-form-padding',
    styleUrl: 'st-form-padding.css'
})
export class StFormPadding {
    @Prop() pad: string = "0";    

    render() {
        return (
            <div style={{padding: this.pad}}>
                <slot></slot>
            </div>
        );
    }
}
