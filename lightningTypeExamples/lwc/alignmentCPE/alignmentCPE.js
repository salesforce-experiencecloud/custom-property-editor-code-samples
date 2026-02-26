import { LightningElement, api } from 'lwc';

export default class AlignmentCPE extends LightningElement {   
    @api label;
    @api description;
    @api errors;

    // default to left alignment
    _value = 'left';

    buttonStates = [
        {value: 'left', 'selected': true, icon:'utility:left_align_text'}, 
        {value: 'center', 'selected': false, icon:'utility:center_align_text'}, 
        {value: 'right', 'selected': false, icon:'utility:right_align_text'}
    ];

    get buttons() {
        return this.buttonStates;
    }

    @api
    set value(alignment) {
        this._value = alignment;
        this.buttonStates = this.buttonStates.map(button => ({
            ...button,
            selected: button.value === alignment
        }))
    }

    get value() {
        return this._value;
    }

    handleAlignmentClick(event) {
        const value = event.target.value;
        this.toggleSelection(value);
        this.value = value;
        this.dispatchEvent(new CustomEvent("valuechange", 
        {detail: {value: this.value}}));
    }

    toggleSelection(value) {
        this.buttonStates = this.buttonStates.map(button => ({
            ...button,
            selected: button.value === value
        }))
    }   
}