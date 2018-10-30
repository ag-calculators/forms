import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';

@Component({
    tag: 'st-form',
    styleUrl: 'st-form.sass'
})
export class StForm {
    @Prop() name: string
    @Prop() action: string = ""
    @Prop() method: 'get' | 'post' | 'GET' | 'POST'
    @Prop() novalidate: boolean
    @Prop() errorClass: string = "st-form-errors"
    @Prop() onFormSubmit: (values: any) => void

    @Event() stFormSubmitted: EventEmitter;
    
    formEl: HTMLFormElement;

    render() {
        return (
            <form name={this.name} ref={(el) => this.formEl = el as HTMLFormElement}>
                <slot></slot>
            </form>
        );
    }

    @Listen('actionRequested')
    async handleAction (event:CustomEvent) {
        let action = event.detail && event.detail.action;

        switch(action) {
            case 'submit':
                await this.handleSubmit(event.detail);
                break;
            case 'reset':
                await this.handleReset(event.detail);
        }
    }

    private inputFields () {

        let elementsArr = Array.from(this.formEl.querySelectorAll('*'));
        return elementsArr.map(c => c as any).filter((elm) => { return !!((elm as FormInputInterface)!.bind) });
    }

    async handleReset(detail:any) {
        this.formEl.classList.remove(this.errorClass);

        const promises = this.inputFields()!.map( async (f) => await (f as FormInputInterface)!.reset(detail));
        await Promise.all(promises);
    }

    async handleSubmit(data: any) {

        let formData = {};
        let valid = true;

        const promises = this.inputFields()!.map( async (f) => await (f as FormInputInterface)!.validate());

        await Promise.all(promises).then((vals) => {
            if (vals.indexOf(false) !== -1) {
                valid = false;
            }            
        });
       
        if (!valid) { return; }
     
        const bindPromises = this.inputFields()!.map(async (f) => await (f as FormInputInterface)!.bind(data || {}) || data);

        await Promise.all(bindPromises).then((vals) => {
            vals.forEach(val => {
                formData = {...formData, ...val};
            })
        });

        this.formEl.classList.remove(this.errorClass);
     
        if (data) {
            const { detail } = data;
            formData = {...{detail}, ...formData};
        }

        this.onFormSubmit && this.onFormSubmit(formData);
        this.stFormSubmitted.emit({ formName: this.name, formData: formData});

    }

    componentDidLoad() {
        if (this.action) {
            this.formEl.setAttribute('action', this.action);
        }
        if (this.method) {
            this.formEl.setAttribute('method', this.method);
        }
        if (this.novalidate) {
            this.formEl.setAttribute('novalidate', '');
        }

        this.formEl.addEventListener('submit', async (e) => {
            if (!this.novalidate) {
                return;
            }
            e.preventDefault();
            
            await this.handleSubmit(null);
        })
    }
}
