import { LightningElement, api } from 'lwc';

export default class StandardArticle extends LightningElement {
    @api articleTitle;
    @api articleDate;
    @api articleContent;
    @api textAlignment;
    @api backgroundColor;
    @api layoutHeight;
    @api layoutWidth;
    @api borderWeight;
    @api borderRadius;
    @api borderStyle;

    get inlineStyle() {
        const styles = {
            'background-color': this.backgroundColor,
            'border-width': this.borderWeight + 'px',
            'border-color': 'black',
            'border-radius': this.borderRadius + 'px',
            'border-style': this.borderStyle,
            'text-align': this.textAlignment
        };

        return Object.keys(styles).reduce((acc, key) => {
            return `${acc}${key}:${styles[key]};`;
        }, '');
    }

}