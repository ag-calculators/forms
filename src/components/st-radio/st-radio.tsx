import { Component, Prop, Method } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';

@Component({
    tag: 'st-radio',
    styleUrl: 'st-radio.sass'
})
export class StRadio implements FormInputInterface {
    
   
    @Prop() name: string
    @Prop() id: string
    @Prop() value: string
    @Prop() label: string
    @Prop() defaultChecked: boolean
    inputEl: HTMLInputElement;

    @Method()
    async setValue(value): Promise<void> {
        let isChecked = !!value;
        if (isChecked && !this.inputEl.checked) {
            this.inputEl.click();
        }
    }

    @Method()
    async validate(): Promise<boolean> {
        return Promise.resolve<boolean>(!this.inputEl.willValidate ? true : this.inputEl.checkValidity());
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise((resolve) => {
            if (this.inputEl.checked) {
                formData[this.name] = this.inputEl.value;
            }
            resolve(formData);
        });        
    }

    @Method()
    async reset(): Promise<void> {
        this.inputEl.checked = this.defaultChecked;
    }

    render() {
        return (
            <label htmlFor={this.name} class="st-radio-label">
                <input ref={(el) => this.inputEl = el as HTMLInputElement}
                        id={this.id}
                        name={this.name}
                        type="radio"
                        value={this.value} />
                <span>{this.label}</span>
            </label>
        );
    }
}
