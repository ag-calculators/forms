import { Component, Prop, Method } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';

@Component({
    tag: 'st-checkbox',
    styleUrl: 'st-checkbox.sass'
})
export class StCheckbox implements FormInputInterface {
   
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
        return Promise.resolve(!this.inputEl.willValidate ? true : this.inputEl.checkValidity());
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise((resolve) => {
            var data = (formData[this.name] || '').split(',') || [];
            if (this.inputEl.checked) {
                data.push(this.inputEl.value);
            } else {
                const index = data.indexOf(this.value);
                if (index !== -1) {
                    data.splice(index, 1);
                }
            }
            formData[this.name] = data.filter(c => !!c).join(",");
            resolve(formData);
        });        
    }
    @Method()
    async reset(): Promise<void> {
        this.inputEl.checked = this.defaultChecked;
    }

    render() {
        return (
            <label htmlFor={this.name} class="st-checkbox-label">
                <input ref={(el) => this.inputEl = el as HTMLInputElement}
                        id={this.id}
                        name={this.name}
                        type="checkbox"
                        value={this.value} />
                <span>{this.label}</span>
            </label>
        );
    }
}
