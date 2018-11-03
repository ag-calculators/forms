import { Component, Prop, State } from '@stencil/core';


@Component({
    tag: 'st-date-picker-field',
    styleUrl: 'st-date-picker-field.sass'
})
export class StDatePickerField {

    @Prop() name: string
    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() required: boolean
    @Prop() defaultDate: Date
    @State() validationMessage: string

    handleValidation (valid, msg) {
        if (!valid) {
            this.validationMessage = msg;
            return;
        }
        this.validationMessage = '';
    }
    render() {
        return (
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint} validationMessage={this.validationMessage}>
                <st-date-picker name={this.name} defaultDate={this.defaultDate} bordered onValidate={this.handleValidation.bind(this)} required={this.required}></st-date-picker>
            </st-form-field>
        );
    }
}
