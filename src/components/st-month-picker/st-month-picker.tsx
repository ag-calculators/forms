import { Component, State, Prop } from '@stencil/core';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


@Component({
    tag: 'st-month-picker',
    styleUrl: 'st-month-picker.sass'
})
export class StMonthPicker {
    @Prop() label: string
    @Prop() name: string
    @Prop() required: boolean
    @State() currentMonth: string
   
    render() {
        return (
            <st-drilldown label={this.label} name={this.name} required={this.required}>
                <st-drilldown-item text="Spring" path="Spring" icon="⚘" smallText={true}>
                    <st-drilldown-item text="Mar" path="Spring/March" icon="⚘" value={3}></st-drilldown-item>
                    <st-drilldown-item text="Apr" path="Spring/April" icon="⚘" value={4}></st-drilldown-item>
                    <st-drilldown-item text="May" path="Spring/May" icon="⚘" value={5}></st-drilldown-item>
                </st-drilldown-item>
                <st-drilldown-item text="Summer" path="Summer" icon="☼" smallText={true}>
                    <st-drilldown-item text="Jun" path="Summer/June" icon="☼" value={6}></st-drilldown-item>
                    <st-drilldown-item text="Jul" path="Summer/July" icon="☼" value={7}></st-drilldown-item>
                    <st-drilldown-item text="Aug" path="Summer/August" icon="☼" value={8}></st-drilldown-item>
                </st-drilldown-item>
                <st-drilldown-item text="Fall" path="Fall" icon="🙕" smallText={true}>
                    <st-drilldown-item text="Sep" path="Fall/September" icon="🙕" value={9}></st-drilldown-item>
                    <st-drilldown-item text="Oct" path="Fall/October" icon="🙕" value={10}></st-drilldown-item>
                    <st-drilldown-item text="Nov" path="Fall/November" icon="🙕" value={11}></st-drilldown-item>
                </st-drilldown-item>
                <st-drilldown-item text="Winter" path="Winter" icon="❄" smallText={true}>
                    <st-drilldown-item text="Dec" path="Winter/December" icon="❄" value={12}></st-drilldown-item>
                    <st-drilldown-item text="Jan" path="Winter/January" icon="❄" value={1}></st-drilldown-item>
                    <st-drilldown-item text="Feb" path="Winter/February" icon="❄" value={2}></st-drilldown-item>
                </st-drilldown-item>
        </st-drilldown>
        );
    }

    componentDidLoad() {
        let monthInt = months[new Date().getMonth()];
        console.log('month', monthInt);
    }
}
