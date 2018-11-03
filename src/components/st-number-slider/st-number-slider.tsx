import { Component, Prop, State, Method, Watch } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';


@Component({
    tag: 'st-number-slider',
    styleUrl: 'st-number-slider.sass'
})
export class StNumberSlider implements FormInputInterface {

    @Prop() name: string
    @Prop() defaultValue: number;
    @Prop() visibleItems: number = 4;
    @Prop() items: string
    @Prop() labels: Array<string>
    @Prop() min: number = -999999;
    @Prop() max: number = 999999;
    @Prop() bordered: boolean;
    @Prop() renderLeftAction: (items) => void
    @Prop() valueChanged: (val) => void
    @State() currentNumber: number;
    @State() currentItems: Array<number> = []
    @State() currentIndex: number = 0;
    @State() itemsArr: Array<number> = []
    
    itemValues: Array<number> = []

    @Method()
    async setValue(value): Promise<void> {
        let num = parseFloat(value);        
        this.currentNumber = num;
    }

    @Method()
    async validate(): Promise<boolean> {

        return Promise.resolve<boolean>(true);
    }

    @Method()
    selectedValue(): number {
        return this.currentNumber;
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise<any>((resolve) => {
            formData[this.name] = this.currentNumber;
            resolve(formData);
        });        
    }

    @Method()
    async reset(): Promise<void> {
        this.currentNumber = this.defaultValue;
    }

    @Method()
    async selectIndex(idx: number): Promise<void> {
        this.currentIndex = idx;
        this.setItems();
    }

    @Watch('defaultValue')
    handleDefaultValue(newValue: number) {
        this.currentNumber = newValue > this.max ? this.max : ( newValue < this.min ? this.min : newValue);
        //this.currentIndex = this.itemsArr.indexOf(this.currentNumber);
        let idx = this.itemsArr.indexOf(this.currentNumber);
        let rm = idx % this.visibleItems;
        this.currentIndex = idx - rm;
        this.setItems();

    }

    private handleValue(value: number, e: UIEvent) {
        e.preventDefault();
        this.currentNumber = value;
        this.valueChanged && this.valueChanged(value);
    }

    setItems() {
        this.currentItems = [...this.itemsArr].slice(this.currentIndex, this.currentIndex + this.visibleItems);
    }

    private getLabel(idx: number) {
        if (!this.labels || this.labels.length < idx) {
            return idx;
        }
        return this.labels[idx];
    }

    slideValues(step, e: UIEvent) {
        e.preventDefault();
        
        let currentIdx = this.currentIndex;

        let idx = this.currentIndex + step;

        if (idx < 0) {
            this.currentIndex = 0;
            
        } else if (idx >= this.itemsArr.length) {
            return;
        } else {
            this.currentIndex = this.currentIndex + step;
        }

        if (currentIdx != this.currentIndex) {
            this.setItems();
        }
        
    }

    render() {
        return (<div class={`st-number-slider${this.bordered ? ' st-border' : ''}`}>
            <button class="st-form-inline-action" onClick={this.slideValues.bind(this, -this.visibleItems)}>⬅</button>
            {this.currentItems.map(item => <button onClick={this.handleValue.bind(this, item)} class={`st-form-inline-action${item == this.currentNumber ? ' st-active' : ''}`}>{this.getLabel(item)}</button>)}
            <button class="st-form-inline-action" onClick={this.slideValues.bind(this, this.visibleItems)}>➡</button>
            {this.renderLeftAction && this.renderLeftAction([...this.itemsArr])}
        </div>);
    }

    @Watch('items')
    handleItemsChange(newValue: string) {
        if (newValue.indexOf('...')) {
            let itemsSplit = newValue.split('...');
            let low = parseInt(itemsSplit[0])
            let high = parseInt(itemsSplit[1])
            if (high > 0) {
                this.itemsArr = [...Array(high + 1).keys()].slice(low);
            }
            
        } else {
            this.itemsArr = JSON.parse(this.items) as Array<number> || [];
        }
        
        this.setItems();
    }

    componentDidLoad() {
        this.currentNumber = this.defaultValue || this.min;
        this.handleItemsChange(this.items || '[]');
    }
}
