import { Component, Prop, Watch } from '@stencil/core';


@Component({
    tag: 'st-number-stepper-field',
    styleUrl: 'st-number-stepper-field.sass'
})
export class StNumberStepperField {

    @Prop() name: string
    @Prop() label: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() step: number
    @Prop() min: number = -999999
    @Prop() max: number = 999999
    @Prop() defaultValue: number
    stepperEl: HTMLStNumberStepperElement;

    render() {
        return (
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint}>
                <st-number-stepper ref={c => this.stepperEl = c as HTMLStNumberStepperElement} defaultValue={this.defaultValue} name={this.name} step={this.step} min={this.min} max={this.max} bordered={true}></st-number-stepper>
            </st-form-field>
        );
    }

    @Watch('defaultValue') 
    handlePropChange (newValue: number) {
        this.stepperEl.defaultValue = newValue;
    }
}
