import { LightningElement, api } from 'lwc';

export default class BorderStyleDropdown extends LightningElement {
    //default to no border
    _value = 'none';

    get options() {
        return [
            { label: 'Dotted Line', value: 'dotted' },
            { label: 'Dashed Line', value: 'dashed' },
            { label: 'Solid Line', value: 'solid' },
            { label: 'None', value: 'none' },
        ];
    }

    @api
    set value(borderStyle) {
        this._value = borderStyle;
    }

    get value() {
        return this._value;
    }

    handleChange(event) {
        this._value = event.detail.value;
        this.dispatchEvent(
            new CustomEvent("valuechange", 
            {
                detail: {
                    value: this._value
                }
            })
        );
    }
}