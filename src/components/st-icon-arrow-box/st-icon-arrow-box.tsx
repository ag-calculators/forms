import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'st-icon-arrow-box',
    styleUrl: 'st-icon-arrow-box.sass'
})
export class StIconArrowBox {
    @Prop() icon: string
    @Prop() iconSize: string
    @Prop() iconFontSize: string
    @Prop() iconColor: string
    @Prop() iconBackgroundColor: string
    @Prop() boxBorderColor: string
    @Prop() inline: boolean
    @Prop() direction: 'left' | 'right' = 'left'
    @Prop() greyscale: boolean
    
    private isRight () {
        return this.direction && this.direction.toLowerCase() === 'right';
    }

    render() {

        let style = {
            '--st-arrow-box-icon-width': this.iconSize || '46px',
            '--st-arrow-box-icon-height': this.iconSize || '46px',
            '--st-icon-arrow-box-icon-font-size': this.iconFontSize || '24px',
            '--st-icon-arrow-box-icon-background-color': this.iconBackgroundColor || '#ffffff',
            '--st-icon-arrow-box-icon-color': this.iconColor || '#919191',
            '--st-arrow-box-border-color': this.boxBorderColor || '#dcdcdc'
        }

        return (
            <div style={style} class={`st-icon-arrow-box${this.greyscale ? ' st-greyscale' : ''}${this.isRight() ? ' st-icon-right' : ''}`}>                
                <div class="st-arrow-box-icon"><span>{this.icon}</span></div>
                <div class="st-arrow-box-box">
                    <st-arrow-box direction={this.direction} inline={this.inline}>
                        <slot></slot>
                    </st-arrow-box>
                </div>
            </div>
        );
    }
}
