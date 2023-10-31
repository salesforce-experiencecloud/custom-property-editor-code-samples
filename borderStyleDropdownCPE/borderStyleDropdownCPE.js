import { LightningElement } from 'lwc';

export default class BorderStyleDropdown extends LightningElement {
    //default to no border
    value = 'none';

    get options() {
        return [
            { label: 'Dotted', value: 'dotted' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Solid', value: 'Solid' },
            { label: 'None', value: 'none' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.dispatchEvent(new CustomEvent("valuechange", 
        {detail: {value: this.value}}));
    }
}