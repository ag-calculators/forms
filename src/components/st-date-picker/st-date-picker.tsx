import { Component, Prop, State, Method } from '@stencil/core';
import { FormInputInterface } from '../../common/interfaces';
import { monthNames } from '../../common/constants';
import { daysInMonth } from '../../common/utils';

@Component({
    tag: 'st-date-picker',
    styleUrl: 'st-date-picker.sass'
})
export class StDatePicker implements FormInputInterface {
    @Prop() name: string
    @Prop() defaultDate: Date
    @Prop() required: boolean
    @Prop() bordered: boolean
    @Prop() onValidate: (valid, msg) => void
    @State() selectedDate: Date
    @State() selectedYear: number
    @State() selectedMonth: number
    @State() selectedDay: number
    @State() days: number = 31
    @State() currentTarget: string
    @State() modalHeader: string

    yearSlider: HTMLStNumberSliderElement;
    monthSlider: HTMLStNumberSliderElement;
    daySlider: HTMLStNumberSliderElement;

    @Method()
    async setValue(value): Promise<void> {
        this.setDate(value as Date);
    }

    @Method()
    async validate(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (!this.selectedDate && this.required) {
                resolve(false);
                this.onValidate && this.onValidate(false, 'Please fill out this field.');
                return;
            }

            if (this.selectedDay > daysInMonth(this.selectedMonth, this.selectedYear)) {
                resolve(false);
                this.onValidate && this.onValidate(false, 'Please select a day.');
                return;
            }

            resolve(true);
            this.onValidate && this.onValidate(true, '');
        });
    }

    @Method()
    async bind(formData: any): Promise<any> {
        return new Promise((resolve) => {
            
            formData[this.name] = this.selectedDate;
            resolve(formData);
        });        
    }

    @Method()
    async reset(): Promise<void> {
        this.setDate(this.defaultDate || new Date());
    }

    handleValueChanges(slider, value) {
        this[`selected${slider}`] = value;
        
        if (this.selectedYear && this.selectedMonth && this.selectedDay) {
            this.selectedDate = new Date(this.selectedYear, this.selectedMonth - 1, this.selectedDay);
        }

        console.log('date picker', this.selectedDate);

        if (slider === 'Day' || !this.monthSlider.selectedValue()) {
            return;
        }
        let year = this.yearSlider.selectedValue();
        let month = this.monthSlider.selectedValue();
        this.days = daysInMonth(month, year);
        
    }

    private getMonthNames() {
        return monthNames.map(c => c.slice(0, 3) as string);
    }

    // handleGridClick(target, value, e: UIEvent) {
    //     this[`selected${target}`] = value as number;
    //     e.preventDefault();

    //     let dialog = this.modal as StModalDialog;
    //     dialog.close();
        
    // }

    // renderGrid(target) {
    //     return <button onClick={this.handleAction.bind(this, target)} class="st-form-inline-action st-subtle-action">{`•••`}</button>
    // }

    // renderGridItems() {
    //     switch(this.currentTarget) {
    //         case 'Day': 
    //             return <st-grid-select maxColumns={3}>{fillRange(1, this.days).map(day => <button style={{order: `${day}`}} onClick={this.handleGridClick.bind(this, 'Day', day)} class="st-form-inline-action">{day}</button>)}</st-grid-select>;
    //         case 'Month':
    //             return <st-grid-select maxColumns={3}>{monthNames.map(name => <button onClick={this.handleGridClick.bind(this, 'Month', monthNames.indexOf(name))} class="st-form-inline-action">{name.slice(0, 3)}</button>)}</st-grid-select>;
    //         case 'Year':
    //             return [];
    //     }
    //     return ['none'];
    // }

    // handleAction (target, e: UIEvent) {
    //     e.preventDefault();
    //     console.log(target);
    //     this.currentTarget = target;
    //     this.modalHeader = `Pick a ${target}`;
    //     let dialog = this.modal as StModalDialog;
    //     dialog.show();
    // }

    // handleClose(e: UIEvent) {
    //     e.preventDefault();
    //     let dialog = this.modal as StModalDialog;
    //     dialog.close();
    // }

    render() {
        return [
            <div class={`st-date-picker${this.bordered ? ' st-border' : ''}`}>
                <st-number-slider ref={c => this.yearSlider = c as HTMLStNumberSliderElement} 
                    name={`${this.name}_year`} 
                    items="1900...2099"
                    visibleItems={3}
                    valueChanged={this.handleValueChanges.bind(this, 'Year')}>
                </st-number-slider>
                <st-number-slider ref={c => this.monthSlider = c as HTMLStNumberSliderElement} 
                    name={`${this.name}_month`} 
                    items="1...12"
                    visibleItems={3}
                    labels={['', ...this.getMonthNames()]}
                    valueChanged={this.handleValueChanges.bind(this, 'Month')}>
                </st-number-slider>
                <st-number-slider ref={c => this.daySlider = c as HTMLStNumberSliderElement} 
                    name={`${this.name}_day`} 
                    items={`1...${this.days}`}                    
                    visibleItems={4}
                    valueChanged={this.handleValueChanges.bind(this, 'Day')}>
                </st-number-slider>
            </div>
        ];
    }
    
    @Method()
    setDate(newDate: Date) {
        this.selectedYear = newDate.getFullYear();
        this.selectedMonth = newDate.getMonth() + 1;
        this.selectedDay = newDate.getDate();

        this.yearSlider.defaultValue = this.selectedYear;
        this.monthSlider.defaultValue = this.selectedMonth;

        this.days = daysInMonth(this.selectedMonth, this.selectedYear);

        this.daySlider.defaultValue = this.selectedDay;
    }

    componentDidLoad() {
        this.setDate(this.defaultDate || new Date());
    }
}
