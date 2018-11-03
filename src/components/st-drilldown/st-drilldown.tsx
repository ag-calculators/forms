import { Component, Prop, State, Method, Element } from '@stencil/core';
import { FormInputInterface, CssClassMap } from '../../common/interfaces';
import { StDrilldownItem } from '../st-drilldown-item/st-drilldown-item';

const regex = new RegExp("/", "g");

@Component({
    tag: 'st-drilldown',
    styleUrl: 'st-drilldown.sass'
})
export class StDrilldown implements FormInputInterface {
    
    @Prop() label: string
    @Prop() name: string
    @Prop() description: string
    @Prop() hint: string
    @Prop() id: string
    @Prop() required: boolean
    @Prop() path: string
    @Prop() itemSelected: (str) => void
    @State() items: any
    @State() level: number = 0
    @State() value: string
    @State() selectedPath: string
    @State() selectedValue: any
    @State() validationMessage: string
    @State() itemsCache: Array<StDrilldownItem>
    @State() pathIcon: string = ''
    @Element() el: HTMLElement
    slotEl: HTMLDivElement;

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise<any>((resolve) => {
            formData[this.name] = this.selectedValue;
            resolve(formData);
        });        
    }
    
    @Method()
    async reset(): Promise<void> {
        this.level = 0;
        this.selectedPath = '';
        this.setItems();
    }

    @Method()
    async validate(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {

            this.validationMessage = "";

            if (!this.required) {
                resolve(true);
            }
            let items = this.itemsCache.filter(a => a.path.startsWith(this.selectedPath));

            if (!this.selectedPath || items.length > 1) {
                this.validationMessage = "Please choose an option";
                resolve(false);
            }

            resolve(true);
        });        
    }

    @Method()
    async setValue(value: any): Promise<void> {
        this.value = `${value}`;
    }

    handleClick(item:any, e:UIEvent) {
        e.preventDefault();

        this.itemSelected && this.itemSelected(item.path);

        this.selectedPath = item.path;
        this.selectedValue = item.value || item.path;
        this.pathIcon = item.icon || '';
        this.level = parseInt((item.path.match(regex) || []).length);

        let childItems = this.itemsCache.filter(c => c.path.startsWith(`${item.path}/`));

        childItems = childItems.filter(c => (c.path.match(regex) || []).length === this.level + 1);
        
        if (!childItems || !childItems.length) {
            return;
        }
        this.items = childItems;
        this.level = this.level + 1;
        this.validationMessage = "";
    }

    handleUp (e:UIEvent) {
        e.preventDefault();
        this.level = this.level === 0 ? 0 : this.level - 1;
        if (this.level > 0) {
            this.selectedPath = this.selectedPath.split('/').slice(0, this.level).join('/');
        } else  {
            this.selectedPath = '';
        }
        this.setItems();
    }

    private renderPath (str) {
        if (!str) { return 'Select One' };
        return ((this.pathIcon && ( this.pathIcon + ' ' ) || '') + (str && str.split('/').join(' » ') || str)) || '';
    }
    

    render() {
        return (
            <st-form-field name={this.name} label={this.label} description={this.description} hint={this.hint} validationMessage={this.validationMessage}>
                <div class={`st-drilldown${this.validationMessage ? ' st-errors' : ''}`}>                    
                    {(this.items || []).map( item => (<button onClick={this.handleClick.bind(this, item)} class={this.itemCssClassMap(item)}>{item.icon && <span class="st-icon">{item.icon}</span>}{item.text}</button>))}
                    {this.level !== 0 && <button class="st-form-inline-action" title="Up one level" onClick={this.handleUp.bind(this)}>⮥</button>}
                </div>
                <div class={`st-drilldown-path${this.validationMessage ? ' st-errors' : ''}`}>┗ {this.renderPath(this.selectedPath) || 'Choose one'}</div>
                <div ref={c => this.slotEl = c as HTMLDivElement}><slot></slot></div>
                <input type="hidden" name={this.name} value={this.value} required={this.required} />
            </st-form-field>
            
        );
    }

    private itemCssClassMap(item: any): CssClassMap {
        let drilldownItem = item as StDrilldownItem;
        if (!drilldownItem) return {'st-form-inline-action': true};

        return {
            'st-form-inline-action': true,
            'st-active': item.path === this.selectedPath,
            'st-stacked': item.icon,
            'st-text-small': item.smallText
        };
      }

    private setItems () {        
        let items = this.itemsCache.filter(item => (item.path.match(regex) || []).length === this.level);
        if (this.selectedPath) {
            items = items.filter(i => i.path.startsWith(this.selectedPath));
        }
        this.items = items || [];

    }

    componentDidLoad() {        
        this.itemsCache = Array.from(this.el.querySelectorAll('st-drilldown-item')).map(a => a as any).filter(c => c as StDrilldownItem);
        this.setItems(); 
    }
}
