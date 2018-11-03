import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-drilldown-item',
    styleUrl: 'st-drilldown-item.css'
})
export class StDrilldownItem {

    @Prop() path: string
    @Prop() text: string
    @Prop() icon: string
    @Prop() smallText: boolean
    @Prop() value: any

    render() {
        return ''
    }
    
}
