import { Component, Prop, State } from '@stencil/core';
import { FormStateInterface, FormRouterInterface } from '../../common/interfaces';


@Component({
    tag: 'st-form-page',
    styleUrl: 'st-form-page.css'
})
export class StFormPage {

    @Prop() formState: FormStateInterface
    @Prop() router: FormRouterInterface
    @State() message: string

    render() {
        return (
            <div>
                <p>Hello StFormPage!</p>
                <p>{this.message}</p>
                <a onClick={this.handleClick.bind(this)}>Go to test</a>
            </div>
        );
    }

    handleClick (e:UIEvent) {
        e.preventDefault();
        this.formState.setState('secret', 'Lowlands');
        this.formState.setState('data', { message: 'temp' });

        this.router.route('/test');
    }
    componentDidLoad() {
        this.formState.setState('test', '12345');
        this.formState.getState('test').then(msg => {
            this.message = msg;
        })
    }
}
