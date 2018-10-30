import { Component, Prop } from '@stencil/core';
import { FormStateInterface, FormRouterInterface } from '../../common/interfaces';

@Component({
    tag: 'st-form-page-2',
    styleUrl: 'st-form-page-2.css'
})
export class StFormPage_2 {

    @Prop() formState: FormStateInterface
    @Prop() router: FormRouterInterface
    @Prop() secret: string

    render() {
        return (
            <div>
                <p>Hello StFormPage_2!</p>
                <p>{this.secret}</p>
                <p>{this.formState.getState('data')['message']}</p>
            </div>
        );
    }
}
