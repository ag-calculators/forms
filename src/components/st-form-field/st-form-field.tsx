import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-form-field',
    styleUrl: 'st-form-field.sass'
})
export class StFormField {

    @Prop() name: string
    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() validationMessage: string
    @Prop() isValid: boolean
    

    render() {
        return (
            <div class="st-form-field">
                <st-form-row>
                    {this.label && <st-form-field-label block={true} htmlFor={this.name}>{this.label}</st-form-field-label>}
                    {this.description && <st-form-field-description>{this.description}</st-form-field-description>}
                    <slot></slot>
                </st-form-row>
                {this.validationMessage && <st-form-field-validation-message>{this.validationMessage}</st-form-field-validation-message>}
                {this.hint && <st-form-field-hint>{this.hint}</st-form-field-hint>}
                
            </div>
        )
    }
}
