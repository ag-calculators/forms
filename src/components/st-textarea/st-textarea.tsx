import { Component, Prop, State, Method } from "@stencil/core";
import { FormInputInterface } from '../../common/interfaces';


@Component({
    tag: 'st-textarea',
    styleUrl: 'st-textarea.sass'
})
export class StTextarea implements FormInputInterface {
    
    
    @Prop() name: string
    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() required: boolean
    @Prop() pattern: string
    @State() validationMessage: string

    inputEl: HTMLTextAreaElement;

    render() {
        let classNames = `${this.validationMessage ? 'st-has-errors' : ''}`;

        return [
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint} 
                validationMessage={this.validationMessage}>
                <textarea class={classNames} ref={(el) => this.inputEl = el as HTMLTextAreaElement} id={this.name} name={this.name} onChange={this.handleChange.bind(this)}><slot></slot></textarea>
            </st-form-field>
        ];
    }

    @Method()
    async setValue(value): Promise<void> {
        this.inputEl.value = value;
    }

    @Method()
    async validate(): Promise<boolean> {
        return Promise.resolve<boolean>(!this.inputEl.willValidate ? true : this.inputEl.checkValidity());
    }

    handleChange (e) {
        e.preventDefault();
        if (!this.inputEl.classList.contains('st-touched')) {
            this.inputEl.classList.add('st-touched');
        }
        this.validationMessage = "";
    }

    @Method()
    async bind(formData): Promise<any> {

        return new Promise((resolve) => {
            if (this.inputEl.checkValidity()) {
                formData[this.name] = this.inputEl.value;
                this.validationMessage = '';
            }
    
            resolve(formData);
        });        
    }
    
    @Method()
    async reset(detail): Promise<void> {
        this.inputEl.value = (detail ? detail.value : this.inputEl.defaultValue) || '';
        this.validationMessage = '';
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
    }
}
