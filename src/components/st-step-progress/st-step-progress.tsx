import { Component, State, Prop, Event, Method, EventEmitter, Watch } from '@stencil/core';


@Component({
    tag: 'st-step-progress',
    styleUrl: 'st-step-progress.sass'
})
export class StStepProgress {

    @Prop() id: string
    @Prop() label: string    
    @Prop() steps: number
    @Prop() currentStep: number
    @Event() stProgressStepChanged: EventEmitter
    @State() activeStep: number
    @State() activeLabel: string
    

    getBar (idx) {
        if (idx <= this.activeStep) {
            return <div class="st-step-progress-bar st-active-step"></div>
        }
        return '';
    }

    handleChange (idx) {
        if (this.activeStep === idx) {
            return;
        }
        this.stProgressStepChanged.emit({ index: idx, id: this.id, target: this});
    }

    @Method()
    setStep(index:number, label:string) {
        this.activeStep = index;
        this.activeLabel = label;
    }

    @Watch('currentStep')
    watchCurrentStep(newValue: any) {
        this.activeStep = newValue;
    }

    @Watch('label') 
    watchCurrentLabel(newValue: any) {
        this.activeLabel = newValue;
    }

    render() {

        let steps = Array.from(Array(this.steps || 0), (_,x) => x);

        return [
            <div class="st-step-progress">
                {steps.map(s => [
                    <div data-step={s + 1} onClick={this.handleChange.bind(this, s + 1)} class={`st-step-progress-dot${s+1 <= this.activeStep ? ' st-active' : ''}`}></div>,
                    s + 1 < this.steps ? <div class={`st-step-progress-bar${s + 2 <= this.activeStep ? ' st-active' : ''}`}></div> : ''
                ])} 
                
            </div>,
            this.label && <p class="st-step-progress-arrow-box">{this.activeLabel}</p>
        ]
    }

    componentDidLoad() {
        this.activeStep = this.currentStep;
        this.activeLabel = `${this.label}`;
    }

    
}
