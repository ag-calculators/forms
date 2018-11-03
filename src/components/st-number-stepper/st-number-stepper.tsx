import { Component, Prop, State, Method, Watch } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';


@Component({
    tag: 'st-number-stepper',
    styleUrl: 'st-number-stepper.sass'
})
export class StNumberStepper implements FormInputInterface {
    
    @Prop() name: string
    @Prop() defaultValue: number;
    @Prop() step: number;
    @Prop() min: number = -999999;
    @Prop() max: number = 999999;
    @Prop() bordered: boolean;
    @State() currentNumber: number;
    

    buttonEl: HTMLButtonElement;

    @Method()
    async setValue(value): Promise<void> {
        let num = parseFloat(value);
        
        this.currentNumber = num;
        this.updateButton();
    }

    @Method()
    async validate(): Promise<boolean> {

        return Promise.resolve<boolean>(true);
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise<any>((resolve) => {
            formData[this.name] = this.currentNumber;
            resolve(formData);
        });        
    }

    @Method()
    async reset(): Promise<void> {
        this.currentNumber = this.defaultValue;
    }

    @Watch('defaultValue')
    handleDefaultValue(newValue: number) {
        this.currentNumber = newValue > this.max ? this.max : ( newValue < this.min ? this.min : newValue);
        this.updateButton();
    }

    handleValue(step: number, e: UIEvent) {
        e && e.preventDefault();

        if (this.currentNumber + step > this.max) {
            this.currentNumber = this.max;
        } else if (this.currentNumber + step < this.min) {
            this.currentNumber = this.min;
        } else {
            this.currentNumber = this.currentNumber + step;
        }
        
        this.updateButton();
    }
    
    private updateButton() {
        if (!this.buttonEl) return;
        this.buttonEl!.innerText = `${this.currentNumber}`;
    }

    render() {
        return (<div class={`st-number-stepper${this.bordered ? ' st-border' : ''}`}>
            <button class="st-form-inline-action" onClick={this.handleValue.bind(this, -this.step)}>⬇</button>
            <button disabled ref={c => this.buttonEl = c as HTMLButtonElement} class="st-form-inline-action st-active">{this.currentNumber}</button>
            <button class="st-form-inline-action" onClick={this.handleValue.bind(this, this.step)}>⬆</button>
        </div>);
    }

    componentDidLoad() {
        this.currentNumber = this.defaultValue || this.min;
        this.updateButton();
    }
}
