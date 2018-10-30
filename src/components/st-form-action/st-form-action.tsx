import { Component, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'st-form-action',
    styleUrl: 'st-form-action.css'
})
export class StFormAction {
    @Prop() action:string
    @Prop() renderIcon: () => void
    @Prop() iconPosition: 'left' | 'right' = 'right'
    @Prop() iconText: string
    @Prop() actionText: string
    @Prop() actionDetail: any
    @Prop() disabled: boolean
    @Prop() flex: boolean
    @Prop() responsive: boolean

    @Event() actionRequested: EventEmitter
    
    handleClick (e:Event) {
        e.preventDefault();
        let detail = this.actionDetail ? (typeof this.actionDetail === 'string' ? JSON.parse(this.actionDetail) : this.actionDetail) : {};

        this.actionRequested.emit({action: this.action, detail: detail});
    }

    render() {
        let classNames = `st-form-action${this.disabled ? ' st-disabled': ''}${this.flex ? ' flex' : ''}${this.responsive ? ' st-responsive' : ''}`;
        let isLeft = this.iconPosition === 'left';
        return (
            <button onClick={this.handleClick.bind(this)} class={classNames}>
                {this.renderIcon && isLeft && this.renderIcon()}{isLeft && this.iconText}
                <span>{this.actionText}</span><slot></slot>
                {this.renderIcon && !isLeft && this.renderIcon()}{!isLeft && this.iconText}
            </button>
        );
    }
}
