import { Component, Prop, State, Method, Watch } from "@stencil/core";
import { FormInputInterface } from '../../common/interfaces';

@Component({
    tag: "st-number-input",
    styleUrl: 'st-number-input.sass'
})
export class StNumberInput implements FormInputInterface {
    
    @Prop() defaultValue: number
    @Prop() name: string
    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() required: boolean
    @Prop() pattern: string
    @State() validationMessage: string
    @State() icon: string = "?"

    inputEl: HTMLInputElement;

    render() {
        let classNames = `${this.validationMessage ? 'st-has-errors' : ''}`;

        if (this.validationMessage) {
            this.icon = '×'
        }

        return [
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint} 
                validationMessage={this.validationMessage}>
                <input class={classNames} ref={(el) => this.inputEl = el as HTMLInputElement} id={this.name} name={this.name} onChange={this.handleChange.bind(this)} type="number"/>
            </st-form-field>
        ];
    }

    handleChange (e) {
        e.preventDefault();
        if (!this.inputEl.classList.contains('st-touched')) {
            this.inputEl.classList.add('st-touched');
        }
        this.validationMessage = "";
    }

    @Method()
    async setValue(value): Promise<void> {
        this.inputEl.value = value;
    }

    @Method()
    async validate(): Promise<boolean> {
        return Promise.resolve<boolean>(!this.inputEl.willValidate ? true : this.inputEl.checkValidity());
    }

    @Method()
    async bind(formData): Promise<any> {
        return new Promise((resolve) => {
            if (this.inputEl.checkValidity()) {
                formData[this.name] = parseFloat(this.inputEl.value);
                this.validationMessage = '';
            }
    
            resolve(formData);
        });        
    }
    
    @Method()
    async reset(): Promise<void> {
        this.inputEl.value = this.inputEl.defaultValue;
        this.inputEl.classList.remove('st-touched');
        this.validationMessage = '';
        this.icon = '';
    }

    @Watch('defaultValue')
    handleDefaultValue(newValue: number) {
        this.inputEl.value = `${newValue}`;
    }

    componentDidLoad() {
        if (this.required) {
            this.inputEl.setAttribute('required', '');
        }
        if (this.pattern) {
            this.inputEl.setAttribute('pattern', this.pattern);
        }

        this.inputEl.addEventListener(
            "invalid",
            () => {
              this.inputEl.classList.add("st-error");
              this.validationMessage = this.inputEl.validationMessage;
            },
            false
        );

        if (this.defaultValue) {
            this.inputEl.value = `${this.defaultValue}`;
        }
    }
}
