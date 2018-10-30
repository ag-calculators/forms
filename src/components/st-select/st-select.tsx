import { Component, Prop, State, Method } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';

@Component({
    tag: 'st-select',
    styleUrl: 'st-select.sass'
})
export class StSelect implements FormInputInterface {
    
    @Prop() name: string
    @Prop() label: string    
    @Prop() description: string
    @Prop() hint: string
    @Prop() required: boolean
    @State() validationMessage: string
    selectEl: HTMLSelectElement;
    

    render() {
        let classNames = `${this.validationMessage ? 'st-has-errors' : ''}`;

        return (
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint} 
                validationMessage={this.validationMessage}>
                <select class={classNames} ref={(el) => this.selectEl = el as HTMLSelectElement} onChange={this.handleChange.bind(this)}>
                    <slot></slot>
               </select>
            </st-form-field>
        );
        // return [
        //     this.label && <label html-for={this.name}>{this.label}</label> || '',
        //     <select ref={(el) => this.selectEl = el as HTMLSelectElement}>
        //         <slot></slot>
        //     </select>
        // ];
    }

    handleChange (e) {
        e.preventDefault();
        if (!this.selectEl.classList.contains('st-touched')) {
            this.selectEl.classList.add('st-touched');
        }

        this.validationMessage = "";
    }

    @Method()
    async validate(): Promise<boolean> {
        return Promise.resolve(!this.selectEl.willValidate ? true : this.selectEl.checkValidity());
    }

    @Method()
    async setValue(value: any): Promise<void> {
        this.selectEl.value = value;
    }

    @Method()
    async bind(formData): Promise<any> {

        return new Promise<any>((resolve) => {
            if (this.selectEl.checkValidity()) {
                formData[this.name] = this.selectEl.value;
                this.validationMessage = '';
            }    
            resolve(formData);
        })        
    }

    @Method()
    async reset(detail): Promise<void> {
        this.selectEl.selectedIndex = -1;
        if(detail!.value) {
            let opt = this.selectEl.querySelector(`option[value="${detail.value}"]`);
            if (opt) {
                opt.setAttribute('selected', 'selected');
            }
        }
        this.selectEl.classList.remove('st-touched');
        this.selectEl.classList.remove('st-has-errors');
        this.validationMessage = '';
    }

    componentDidLoad() {

        if (this.required) {
            this.selectEl.setAttribute('required', '');
        }

        this.selectEl.addEventListener(
            "invalid",
            () => {
              this.validationMessage = this.selectEl.validationMessage;
            },
            false
        );
    }
}
