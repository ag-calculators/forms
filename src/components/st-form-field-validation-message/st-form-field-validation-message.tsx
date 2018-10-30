import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-form-field-validation-message',
    styleUrl: 'st-form-field-validation-message.sass'
})
export class StFormFieldValidationMessage {

    @Prop() validationMessage: string

    render() {
        return (
            <p class="st-ffvm">
                <svg viewBox="0 0 16 16"><title>error</title><path d="M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z" fill-rule="evenodd"></path></svg>
                <span><slot>{this.validationMessage}</slot></span>
            </p>
        );
    }
}
