import { Component, Prop, State } from '@stencil/core';


@Component({
    tag: 'st-grid-select',
    styleUrl: 'st-grid-select.sass'
})
export class StGridSelect {
    
    @Prop() items: Array<HTMLElement> = []
    @Prop() maxColumns: number = 4
    @Prop() bordered: boolean
    @State() selectedItem: HTMLElement
    el: HTMLDivElement;

    render() {
        let styl = {
            '--st-grid-select-item-width': `${Math.floor(100 / (this.maxColumns && this.maxColumns || 1) )}%`
        }
        return (
            <div style={styl} ref={c => this.el = c as HTMLDivElement}  class={`st-grid-select${this.bordered ? ' st-border' : ''}`}>
                <slot></slot>
            </div>
        );
    }

    componentDidLoad() {
        let children = Array.from(this.el.children);
        if (!children || !children.length) {
            return;
        }
        children.forEach( child => {
            let div = document.createElement('div');
            div.className = 'st-grid-select-item';
            child.parentElement.insertBefore(div, child);
            div.appendChild(child);
        })
    }
}
