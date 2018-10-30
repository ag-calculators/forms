import { Component, Prop } from '@stencil/core';
import { FormStateInterface } from '../../common/interfaces';


@Component({
    tag: 'st-form-route',
    styleUrl: 'st-form-route.sass'
})
export class StFormRoute {

    @Prop() route: string
    @Prop() component: string
    @Prop() formState: FormStateInterface
    @Prop() renderRoute: (params: any) => any
    @Prop() params: any

    render() {
        return null;
    }
}
