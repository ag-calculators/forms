import { Component, Prop, State, Method } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';


@Component({
    tag: 'st-radio-button',
    styleUrl: 'st-radio-button.sass'
})
export class StRadioButton implements FormInputInterface {
    
    
    @Prop() name: string
    @Prop() id: string
    @Prop() value: string
    @Prop() label: string
    @Prop() required: boolean
    @Prop() defaultChecked: boolean
    @State() checked: boolean

    @Prop() backgroundColor: string = '#428bca';
    @Prop() color: string = "#fff";
    @Prop() checkedBackgroundColor: string = "#3277b3";

    inputEl: HTMLInputElement;

    @Method()
    async setValue(value): Promise<void> {
        let isChecked = !!value;
        this.checked = isChecked;
        if (isChecked) {
            this.inputEl.setAttribute('checked', '');
        }
    }

    @Method()
    async validate(): Promise<boolean> {
        return Promise.resolve<boolean>(!this.inputEl.willValidate ? true : this.inputEl.checkValidity());
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise<any>((resolve) => {
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
        let style = { 
            '--st-radio-button-background-color': this.backgroundColor,
            '--st-radio-button-color': this.color,
            '--st-radio-button-checked-background-color': this.checkedBackgroundColor
        };

        return [
            <input id={this.id} ref={c => this.inputEl = c as HTMLInputElement} type="radio" class="st-radio-button" name={this.name} value={this.value}  />,
            <label style={style} class={this.checked ? 'checked' : ''} htmlFor={this.id} onClick={this.handleClick.bind(this)}>                
                {this.label}
            </label>
        ]
    }

    handleClick () {
        this.inputEl.click();
    }

    componentDidLoad() {
        this.checked = this.defaultChecked;

        if (this.checked) {
            this.inputEl.setAttribute('checked', '');
        }
        if (this.required) {
            this.inputEl.setAttribute('required', '');
        }
    }
}
