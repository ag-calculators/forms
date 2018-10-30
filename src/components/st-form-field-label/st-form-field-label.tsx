import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-form-field-label',
    styleUrl: 'st-form-field-label.sass'
})
export class StFormFieldLabel {

    @Prop() htmlFor: string
    @Prop() block: boolean    

    render() {
        var classList = `st-ffl st-display-${this.block ? 'block': 'inline'}`;
        return (
            <label class={classList} htmlFor={this.htmlFor}>
                <slot></slot>
            </label>
        );
    }
}
