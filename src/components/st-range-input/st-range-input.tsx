import { Component, Prop, State, Method } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';

@Component({
    tag: 'st-range-input',
    styleUrl: 'st-range-input.sass'
})
export class StRangeInput implements FormInputInterface {
    
    @Prop() name: string
    @Prop() id: string
    @Prop() label: string
    @Prop() value: number
    @Prop() min: number = 1
    @Prop() max: number = 100
    @Prop() required: boolean
    @State() currentValue: number
    @State() validationMessage: string
    inputEl: HTMLInputElement;
    initialValue: number
    labelEl: HTMLLabelElement;

    @Method()
    async setValue(value): Promise<void> {
        this.inputEl.value = value;
    }
    
    @Method()
    async validate(): Promise<boolean> {
        return Promise.resolve(!this.inputEl.willValidate ? true : this.inputEl.checkValidity());
    }

    @Method()
    async bind(formData: any) {
        formData[this.name] = parseFloat(this.inputEl.value);
        return Promise.resolve(formData)
    }

    @Method()
    async reset(): Promise<void> {
        this.inputEl.value = `${this.initialValue}`;
        this.handleChange();
    }

    handleChange () {
        this.labelEl.innerText = this.inputEl.value;
    }
    render() {
        return (
            <div class="st-range-input-group">
                {this.label && <st-form-field-label>{this.label}</st-form-field-label>}
                <div class="st-range-input">
                    <input type="range" ref={c => this.inputEl = c as HTMLInputElement} id={this.id} name={this.name} 
                       onInput={this.handleChange.bind(this)} autocomplete="off" value={this.value} min={`${this.min}`} max={`${this.max}`} />
                    <label ref={c => this.labelEl = c as HTMLLabelElement} htmlFor={this.id}>{this.currentValue}</label>
                    {this.validationMessage && <st-form-field-validation-message validationMessage={this.validationMessage}></st-form-field-validation-message>}
                </div>
            </div>
        );
    }
    componentDidLoad() {
        this.initialValue = this.value;
        this.handleChange();

    }
}
