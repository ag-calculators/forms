import { Component, Prop, State, Element } from '@stencil/core';

const events = ['blur', 'keyup', 'paste', 'copy', 'cut', 'delete', 'mouseup'];

@Component({
    tag: 'st-editable-content',
    styleUrl: 'st-editable-content.sass'
})
export class StEditableContent {
    @Prop() onEdit: (content) => void;
    @Prop() numbersOnly: boolean = false;
    @Prop() maxNumber: number = 99999
    @Prop() minNumber: number = 0
    @State() currentContent: string
    @Element() el: HTMLElement;
    

    render() {
        return (
            <slot></slot>
        );
    }

    handleEdit (e: UIEvent) {
        e!.preventDefault();
        e!.stopPropagation();    
        
        var firstChild = this.el.children.length && this.el.children[0] as HTMLSlotElement;
        
        if (this.currentContent === firstChild.textContent) {
            return;
        }

        this.currentContent = firstChild!.textContent;
        this.onEdit && this.onEdit(this.currentContent);
    }
    allowNumbers (e: KeyboardEvent) {
        var charCode = (e.which) ? e.which : e.keyCode
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return true;
    }
    componentDidLoad() {
        var firstChild = this.el.children.length && this.el.children[0];
        if (!firstChild) {
            return;
        }

        firstChild.setAttribute('contenteditable', '');

        if (this.numbersOnly) {
            firstChild.addEventListener('keypress', this.allowNumbers.bind(this), false);
        }

        events.forEach( evt => {
            firstChild.addEventListener(evt, this.handleEdit.bind(this), false)
        });
    }
    componentDidUnload() {

        var firstChild = this.el.children.length && this.el.children[0];
        if (!firstChild) {
            return;
        }

        events.forEach( evt => {
            
            firstChild.removeEventListener(evt, this.handleEdit.bind(this))
            
        });


    }
}
