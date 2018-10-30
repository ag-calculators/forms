import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-arrow-box',
    styleUrl: 'st-arrow-box.sass'
})
export class StArrowBox {
    @Prop() inline: boolean
    @Prop() direction: 'left' | 'LEFT' | 'right' | 'RIGHT' = 'left'

    render() {
        let style = {
            '--st-arrow-box-display': this.inline ? 'inline' : 'block'
        };
        
        return (
            <div class={`st-arrow-box${this.direction.toLowerCase() === 'right' ? ' st-arrow-box-right' : ''}`} style={style}>
                <slot></slot>
            </div>
        );
    }
}
