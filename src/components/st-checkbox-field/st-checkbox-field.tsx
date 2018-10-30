import { Component, Prop, State, Element } from '@stencil/core';


@Component({
    tag: 'st-checkbox-field',
    styleUrl: 'st-checkbox-field.sass'
})
export class StCheckboxField {
    @Prop() name: string
    @Prop() id: string
    @Prop() label: string
    @Prop() fieldLabel: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() value: string
    @State() validationMessage: string
    @Prop() required: boolean
    
    @Element() rootEl: HTMLElement

    render() {
        return (
            <st-form-field label={this.fieldLabel} name={this.name} description={this.description} hint={this.hint}>
                <st-checkbox id={this.id} name={this.name} label={this.label}></st-checkbox>
            </st-form-field>
        );
    }

    componentDidLoad() {
        let checkbox = this.rootEl.querySelector('input[type="checkbox"]') as HTMLInputElement;
        if (!checkbox) return;

        if (this.required) {
            checkbox.setAttribute('required', '');
        }

        checkbox.addEventListener('invalid', () => 
        this.validationMessage = checkbox.validationMessage,
        false);
    }
}
