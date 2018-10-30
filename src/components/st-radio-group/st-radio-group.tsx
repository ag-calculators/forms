import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-radio-group',
    styleUrl: 'st-radio-group.css'
})
export class StRadioGroup {

    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string

    render() {
        return (
            <st-form-field label={this.label} description={this.description} hint={this.hint}>
                <st-form-options-row>
                    <slot></slot>
                </st-form-options-row>
            </st-form-field>
        );
    }
}
