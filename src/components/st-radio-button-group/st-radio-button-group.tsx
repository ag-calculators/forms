import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-radio-button-group',
    styleUrl: 'st-radio-button-group.sass'
})
export class StRadioButtonGroup {

    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() layout: 'inline' | 'stacked' | 'grid' = 'inline'

    render() {
        return (
            <div class="st-form-field">
                {this.label && <st-form-field-label>{this.label}</st-form-field-label>}
                <div class={`st-radio-button-group st-group-layout-${this.layout}`}>
                    <slot></slot>
                </div>
            </div>
        );
    }
}
