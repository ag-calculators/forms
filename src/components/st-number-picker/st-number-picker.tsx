import { Component, Prop, State, Method, Watch } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';


@Component({
    tag: 'st-number-picker',
    styleUrl: 'st-number-picker.sass'
})
export class StNumberPicker implements FormInputInterface {

    @Prop() label: string
    @Prop() name: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() id: string
    @Prop() numbers: any
    @Prop() step: number
    @Prop() required: boolean
    @Prop() defaultValue: number
    @State() innerNumbers: Array<number>
    @State() currentNumber: number
    @State() currentLevel: number = 0
    @State() selectedValue: number = 0
    @State() validationMessage: string
    
    buttonEl: HTMLButtonElement;
    maxValue: number;
    minValue: number;
    inputEl: HTMLInputElement;

    private updateButton() {
        if (!this.buttonEl) return;
        this.buttonEl!.innerText = `${this.selectedValue}`;
    }

    handleClick (e, number) {
        e.preventDefault();
        this.currentLevel = this.currentLevel + 1;
        this.currentNumber = number;
        this.selectedValue = number;
        this.validate(); 
    }

    handleValue(step, e) {
        e && e.preventDefault();
        this.selectedValue = this.selectedValue + step;
        this.updateButton(); 
    }

    async handleClose(e:UIEvent) {
        e.preventDefault();
        this.buttonEl = null;
        await this.reset();
    }

    @Method()
    async setValue(value): Promise<void> {
        let num = parseFloat(value);
        
        this.selectedValue = num;
        this.updateButton();
    }

    @Method()
    async validate(): Promise<boolean> {

        return new Promise<boolean>((resolve) => {
            if (!this.required) resolve(true);

            this.validationMessage = isNaN(this.selectedValue) ? "Please select a number." : "";
            resolve(!isNaN(this.selectedValue));
        })        
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise<any>((resolve) => {
            formData[this.name] = this.selectedValue;
            resolve(formData);
        });        
    }

    @Method()
    async reset(): Promise<void> {
        this.currentLevel = 0;
        this.selectedValue = this.defaultValue;
        this.validationMessage = "";
    }

    render() {
        let buttonStyle = { display: this.currentLevel === 0 ? 'block' : 'none' };

        return (
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint} validationMessage={this.validationMessage}>
                <div class={`st-number-picker${this.validationMessage ? ' st-errors' : ''}`}>                
                    {(this.innerNumbers || []).map(n => 
                            <button  style={buttonStyle} class={`st-form-inline-action${n === this.selectedValue ? ' st-active' : ''}`} onClick={(e:UIEvent) => this.handleClick.call(this, e, n)}>{n}</button>)}
                    {this.currentLevel > 0 && [
                        <button class="st-form-inline-action" onClick={this.handleValue.bind(this, -this.step)}>⬇</button>,
                        <button disabled ref={c => this.buttonEl = c as HTMLButtonElement} class="st-form-inline-action st-active">{this.currentNumber}</button>,
                        <button class="st-form-inline-action" onClick={this.handleValue.bind(this, this.step)}>⬆</button>,
                        <button class="st-form-inline-action" onClick={this.handleClose.bind(this)}>&times;</button>,
                    ]}
                    <input ref={c => this.inputEl = (c as HTMLInputElement)} type="hidden" name={this.name} value={this.selectedValue} />
                </div>
            </st-form-field>
            
        );
    }

    @Watch('numbers')
    numbersDidChangeHandler(newValue: any) {
        this.innerNumbers = JSON.parse(newValue);        
    }

    componentDidLoad() {
        this.innerNumbers = JSON.parse(this.numbers);
        this.minValue = this.innerNumbers.length && this.innerNumbers[0];
        this.maxValue = this.innerNumbers.length && this.innerNumbers[this.innerNumbers.length - 1];
        this.selectedValue = this.defaultValue;

        if (this.required) {
            this.inputEl.setAttribute('required', '');
        }
    }

}
